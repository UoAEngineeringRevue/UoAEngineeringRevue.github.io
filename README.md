# Engineering Revue Website

**NOTE: As of 11 March 2020, this version of the website has been deprecated. To see the current website, please visit the [engrevue-website repo](https://github.com/UoAEngineeringRevue/engrevue-website).**

## Notes
* Website uses the Bootstrap framework
* To deploy changes, push your changes to the master branch and GitHub pages will build the site automatically

### The Navbar
In order to solve the issue of having to manually update the navbar in all the webpages, each page dynamically loads the navbar from the ```navbar.html``` file. By changing the navbar items in that file, the change will be reflected across all pages. However, the downside is a few ms where the navbar is not visible when opening the page, and not being able to see the navbar during development.

## Authors
* 2020
  * Di Kun Ong
  * Alex Ruddell

* 2019
  * Alex Kennedy
  * Di Kun Ong

* 2018
  * Daniel Wong
  * Michael Kemp
