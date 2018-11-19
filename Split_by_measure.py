import pandas as pd
import os

data_folder = "./data/GBD_data/"
saving_folder = "./data/Cleaned_GBD_data/"
file_list = [i for i in sorted(os.listdir(data_folder)) if 'IHME-GBD' in i]

pdfs = []
for file in file_list:
    print("Reading {} ...".format(file))
    pdfs.append(pd.read_csv(data_folder + file))
 
cleaned_pdfs = []
print("Dropping unuseful id columns...")
for i in range(len(pdfs)):
    cleaned_pdfs.append(pdfs[i].drop(['location_id', 'measure_id', 'sex_id', 'age_id', 'cause_id', 'metric_id'], axis=1))

# Merge into one huge data matrix
print("Merging into one huge data matrix...")
pd_all = pd.concat(cleaned_pdfs).reset_index(drop=True)
print("Shape: {}".format(pd_all.shape))

# Get all measure names
measure_names = pd_all.measure_name.unique()
# Group by and get all groups
groups_by = pd_all.groupby('measure_name')
measure_groups = dict.fromkeys(measure_names)
for measure in measure_names:
    measure_groups[measure] = groups_by.get_group(measure)
    
# Save the groups in csv
for measure in measure_names:
    filename = data_folder+measure+".csv"
    print("Saving {} to {}".format(measure, saving_folder+measure+".csv"))
    measure_groups[measure].to_csv(filename, compression="zip")