#!/bin/bash

python -m landslide conf.cfg
mv out.html temp.html

head -n 25 temp.html > out.html
echo "<script src="js/plotly-latest.js"></script>" >> out.html
tail -n +26 temp.html >> out.html
