# Comment Codebook
Refer to this codebook for commenting your sketches.  The numbered list below contains each type of deictic comment, paired with its description.

Each example below is wrapped around comment delimiters (`//`) and contains `"abc"` as a placeholder for the actual text comment.  The term "referent" is used to describe the line(s) of code to which the comment refers.

Generally, deictic characters "point" to their referent using characters whose shapes could be interpreted as pointing (i.e. `<-`, `->` ,`^`, etc.)

1. `// @ln10  abc... //` references line 10

2. `// <-   abc... //` placed on same line as referent; references preceding statement on same line 

3. `// ->   abc... //` placed on same line as referent; references proceeding statement on same line

4. `// \/   abc... //` placed above referent line; references that line of code only

5. `// \/3  abc... //` placed above referent line; references 3 lines below

6. `// ^    abc... //` placed below referent line; references above line of code only

7. `// ^3   abc... //` placed below referent line; references 3 preceding lines

8. `// abc...//`  this can be used for "commenting out" code, for test/debug purposes (this comment lacks deictic characters)