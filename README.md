# MorningScore_test
Short test from Morning Score
This is the project part that is executing the @rumras/csvparse package.

Author: Rune M Rasmussen

Task: Build a csv parser

Performance comments: Did some testing but thought it out of scope to optimize for millions or rows.
Did test of up to 20k rows and it took around 0.2 seconds.

Security comments: Not sure what to include here as the whole code/test can be executed locally. Sure something could be hidden in a file but in this case i found a file from a trusted source to test on and i made the npm package myself.

Lightweight?:
It got nothing but a very simple function to change from the csv format to a JSON format.
It could be considered to handle alot of different issues regarding parsnig of csv files, but for this scope only a few things are handled.
 - Removing whitespaces before/after text/numbers in fields
 - It's possible to change from a comma separated file to other kinds of separated files (fx. semicolon).

@rumras/csvparse can be installed by going to a terminal and selecting the folder where it's to be installed and running: 
 - npm install @rumras/csvparse


## SAMPLES 
csv samples borowed from https://people.sc.fsu.edu/~jburkardt/data/csv/csv.html
