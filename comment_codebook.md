# Comment Codebook
Refer to this codebook for commenting your sketches.  The numbered list below contains each type of deictic comment, paired with its description.

Each example below is wrapped around comment delimiters (`//`)

1. `// @ln10  abc... //` references line 10
2. `// <-   abc... //` placed on same line as referent; references preceding statement on same line 
3. `// ->   abc... //` placed on same line as referent; references proceeding statement on same line
4. `// \/   abc... //` placed above referent line; references that line of code only
5. `// \/3  abc... //` placed above referent line; references 3 lines below
6. `// ^    abc... //` placed below referent line; references above line of code only
7. `// ^3   abc... //` placed below referent line; references 3 preceding lines
8. `// abc...//`  "commenting out" code for test/debug purposes, which sets this type of commenting apart from indexical commenting. This will become important if we develop color-highlighting functionality... unique "greying out" of code through comments could provide quick understanding of comment's intended purpose, for example.   