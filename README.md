
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
================================

Team Lead Daily Notes:
09.18.17 - JT
Today we created a plan for splitting up the single item page. We used a white board to write out all of the user stories we would need.
- Tivona researched the Etsy website for our user stories.
- Hannah wrote the main API fetch.
- JT created the repo on his GitHub and added our user stories to the Trello board.
- Kevin researched Git merging, fetching, etc.

09.19.17 - Hannah
Morning:
- JT and Kevin made progress on the API
- Tivona found some Etsy item cases we missed previously
- Hannah did base styling for header.
- Goals for the day: get images on the page, and fill the header template.

09.20.17 - Kevin
Goals for the day: Address Merge Issues, generate a CSS/classNames List, Finish MVP Wire-frame for the Product Page, begin work on the Header, and to make progress on the Product Page Components.

- Morning:
- We all meet with the Homepage group to coordinate for the future merge.

- Afternoon:
- Tivona started work on the header and header drop-down.
- Hannah continued wire-framing and styling for the product page.
- JT began work on the details and faq sections.
- Kevin wrote up the CSS and classNames list and shared with all React Devs.

09.21.17 - Tivona
Today we have decided to...
- Locate an old project that may provide guidance on how to implement the dropdown function of the header (Tivona)
- Add dropdown features to the header (Kevin)
- Update and Complete the overview section (JT)
- Complete shop icons and ensure that images, names, locations, and price are visible (Hannah)
- Debug the problem where the Item title and price does not refresh or work for each page (JT)
- Complete the "Meet the Owner" section (Hannah)

09.22.17 - Tivona
- Today we agreed to complete any tasks that we had left open.  We completed reviews, updated CSS, continued to work on the header ( Kevin) made a LOT of progress on the header, but there is still a LOT to do.  Made sure all pictures were where they were supposed to be.  Made the page more Responsive and prepared for merging with the Home Page/Footer group.  We successfully merged both pieces (after JT and Sam worked through some merge conflicts). CSS was off a bit after the merge, but (Hannah and Katie worked to resolve those).  There are a few items that need tweaking after the merge, but we are confident that they will be complete by deadline.
