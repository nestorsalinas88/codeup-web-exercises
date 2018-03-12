#README is a way to communicate with other developers on config environment.
#HTML and CSS Notes
#Creating a git repository 
1."pit init"

1.create a new repository on Github

1.add your remote server "git init"
1. 'git add file.html
 
1.Commit your changes 'git commit -m "docs: add initial notes about using bit'
1. Push to github 'git push origin master'


#html
*structure of documents 
* elements are made of tags, attributes, name, value, and content
*main components
    -elements
        *tags (opening and optionally a closing tag)
        *attributes
            -name, value, (key-value pairs)
            -value is between quotes 
            -value is optional, for instance `checked`, `selected`
        *contents, if it's text or more elements, or both 
    -types of elements
        * inline -> `span`, `strong`, `em`, `input`
        *block -> `div`, `h1`, `p`, `ul`
        *void -> `br`(block), `img`(inline), `hr` (block)
        
#CSS
**goal** Visual style of a page
*main components 
    -selectors
        *selector, name
        *declaration 
            *property 
            *value
        *the content between the opening and closing curly brace is called a declaration block 
    - Types of selector 
        *color 
        *fonts 
        *text
        *layout
            -floats
            -positioning -> relative or absolute
        *box model -> width, height, border, padding, and margin 
    *types of layouts 
        -fixed. We use pixels
        -fluid. We use percents
        -responsive. We use media queries