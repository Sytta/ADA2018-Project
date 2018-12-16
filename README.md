# Who is at Risk for Mental Illness?

#### Data Story: https://sytta.github.io/ADA2018-Project

# Abstract

1 in 4 people globally will suffer from mental health or neurological disorders at some point in their lives. However, 2/3 of these people will never seek help, and 8 million lives are lost due to mental illnesses each year. Going forward, if we want to help those affected by this disease, it is important to identify which groups are at risk and what treatments are most effective.

Our goal for this project is separated into two components:
1. Develop insights on key risk factors of mental illness
2. Identify treatments/solutions that have or have not worked in the past

We will be using multiple datasets for this project. One major dataset is provided by the Organization for Economic Co-operation and Development (OECD) and is located here: https://stats.oecd.org/Index.aspx?DataSetCode=EAG_ESO#

The data contains information on adults who have reported depression and can be segmented by country, age, education level, and employment.

# Research questions
- Is mental illness prevalence similar across countries/regions?
    - If not, what could be the reason behind this? (ex. working hours, minimum wage laws, retirement age)
- What is the mental illness distribution over demographics including:
    - Age
    - Gender
    - Income
    - Education Level
    - Employment
    - Occupation
- What are the mental illness's variation in impact over demographics including:
    - Age
    - Location
    - Gender

# Dataset

List the dataset(s) you want to use, and some ideas on how do you expect to get, manage, process and enrich it/them. Show us you've read the docs and some examples, and you've a clear idea on what to expect. Discuss data size and format if relevant.

Organization for Economic Co-operation and Development (OECD) Dataset: https://stats.oecd.org/Index.aspx?DataSetCode=EAG_ESO#
The data is in CSV format and contains information on adults who have reported depression and can be segmented by country, age, education level, and employment.

GHDx Global Burden of Disease Study: http://ghdx.healthdata.org/gbd-2016 
The link contains many datasets in CSV format. One dataset in particular includes the countries, year, population, and prevalence of mental illness in females/males as a %. Although not all country contains information, this will still be useful in analyzing how mental illness has changed over time (from 1800 - 2016), and it allows us to segment this data by country and gender. 

# A list of internal milestones up until project milestone 2

***Before project milestone 2***:

**02.11.2018**: Decide on topic and major dataset

**05.11.2018**: Conduct research on other datasets that can be used to draw further insights

**17.11.2018**: Complete data exploration and finalize specific research goals

**10.11.2018**: Perform analytics and begin to draw quantitative insights

**20.11.2018**: Analysis of entire dataset complete and conclusions drawn

**24.11.2018**: Completed milestone 2: Finish project repo with all insights and conclusions formed

***After project milestone 2***:

**05.12.2018**: First design of data story

**10.12.2018**: Rough copy of data story and visualisation complete

**15.12.2018**: Finalized Data Story and notebook

**21.12.2018**: Create poster, demo of visualisation


# Questions for TAa
- Do we need to find all our datasets before beginning the project? We expect to need to have to research for more data when we will be doing the project. Is it acceptable?

# Contributions of Group Members to Milestone 3

**Yawen:** Create structure of HTML for data story, find facts for introduction, graph prevalence of the different types of mental illnesses per continent. Create two separate graphs to allow for easier comparison between mental illness prevalences, and between countries. Create graphs and complete analysis for gender-related segmantation of mental illnesses, and highlight any possible causes of the discrepancy. Upload onto data story.

**Judy:** Conduct statistical hypothesis test for difference in prevalence between employed & active groups. Plot choropleth map graph of mental illness prevalence over years, clean up employment/education dataset and plot its correlation with depression prevalence. Get life satisfaction of countries data and build bubble chart with mental illness prevalence vs life satisfaction over years. Upload graphs and completed analysis onto data story. 

**Rebecca:** Plot graph for death rates vs total deaths per country over years, categorized by continent. Build graph for death rates vs prevalence of mental illness over years, and explain any underlying trends. Build graphs for any age-related segmentation, including segmenting by age+location, age+illness, for both deaths and prevalence data. Analyze all plots, provide explanations and upload onto data story. 
