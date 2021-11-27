# Landing Page Project
> The landing page project is a one page website. It writen using HTML, CSS, and JavaScript. It have 4 sections, with navigation menu to navegat among them.

# Website Feture
## Navigation
> Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.
## Section Active State
> It should be clear which section is being viewed while scrolling through the page.
## Scroll to Anchor
> When clicking an item from the navigation menu, the link should scroll to the appropriate section.

## In this project I did:
* The Navegation menu build after DOM loaded useing javascribt code.
* Stopped the natural behveor for the a link, and use scroll in to view event insted of it.
* Use Intersection Observer to select which section on view port.

# Main functions on the project:
## buildNavgation
> In this function I created the list items, and it's anchors. I stopped the anchors defult behavior, and use scrollIntoView() function instead of it. Then I add the navgation menu to DocumentFragment to keep fast performance.
## setActiveSection
> When scroll to section set this section and its link as active, to Specify which section is the view in it.