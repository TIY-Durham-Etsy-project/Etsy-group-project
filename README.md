Group project.

Don't push to master. Pull or clone production branch. Make a feature branch off of production and push to it. Merge that branch with production when done.

Team lead Schedule:
Mon: Aaron -done
Tue: Sam -done
Wed: Jared
Thurs: Katy
Fri: Sam
Sat: Aaron
Sun: Jared
Mon: Katy

MKDIR etsy-group-project  
cd etsy-group-project
git init    --should be done already
git checkout -b production
git pull <URL> production
git status
git remote -v (make sure the lines start with "origin")

--@start of every task
git checkout production
git pull
git checkout -b <component name = branch name>

--from here work as normal
git branch (check before adding)
git add
git commit
git push origin <component name>

--when done with that task
go to GitHub, branch screen
on your branch press [Pull Request]
select Base: production, compare: <component name>
leave a comment
click [Create pull Request]
