### Comp Sci Review


##### Resources
* [Frontend Masters - Four Semesters of Computer Science in 5 Hours](https://frontendmasters.com/courses/computer-science). [Notes](http://btholt.github.io/four-semesters-of-cs/)

* [MIT's Introduction to Algorithms](http://is.ptithcm.edu.vn/~tdhuy/Programming/Introduction.to.Algorithms.pdf)

* [The Impostor's Handbook](https://bigmachine.io/products/the-imposters-handbook/)

##### Lambda Calculus

* There are only functions, nothing else. 
* Can bind or substitute functions using a λ binding.
* Calculations happen by reduction.

The defining characteristic of a lambda expression is that it is used as data. That is, the function is passed as an argument to another function, returned as a value from a function, or assigned to variables or data structures.


![alt text](http://1.bp.blogspot.com/-0hF-lQX74Xg/U7eUQXA-0XI/AAAAAAAADyM/D-Z_XbxZyzM/s1600/lambda1.png)


λx.(x + x)
> This is a function. We know this because we see the λ. The thing that comes after the λ is the input for that function – these two things together are the function head. After that comes a . which means “here comes the function body”, which in this case is x + x.

λx.x
A function of x returns x.  This is the *identity* function.

λx.y
A function of x returns y. This is a *constant* function. 


[Adventures in Functional Programming - Ruby Conf](https://www.youtube.com/watch?v=FITJMJjASUs)

[Lambda Calculus Tutorial](http://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf)

A *fixpoint* is any value, that when given to a function, returns the same value.  x = f(x).

A *higher order* function is a function that returns another function.



