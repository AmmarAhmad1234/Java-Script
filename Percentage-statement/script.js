let percentage =prompt("Enter Your Percentage Here!")

if(percentage >100)
{
    console.log("Enter the correct percentage")
}
else if(percentage >=90)
{
    console.log("A+")
}
else if(percentage >=80)
{
    console.log("A1")
}
else if(percentage >=70)
{
    console.log("A")
}
else if(percentage >=60)
{
    console.log("B")
}
else if(percentage >=50)
{
    console.log("C")
}
else if(percentage >=34)
{
    console.log("D")
}
else if(percentage <33)
{
    console.log("F")
}
else
{
    console.log("Wrong percentage")
}