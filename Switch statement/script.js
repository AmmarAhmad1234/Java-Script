let percentage = prompt("Enter YOur Percentage Here!")
let grade;

if(percentage >100)
{
   console.log("Plzz Enter the correct percentage")
}
else if(percentage >=90)
{
    console.log("A+")
    grade = "A+"
}
else if (percentage >=80)
{
    console.log("A1")
    grade = "A1"
}
else if (percentage >=70)
{
    console.log("A")
    grade ="A"
}
else if (percentage >=60)
{
    console.log("B")
    grade = "B"
}
else if (percentage >=50)
{
    console.log("C")
    grade = "C"
}
else if (percentage >=40)
{
    console.log("D")
    grade = "D"
}
else if (percentage <40)
{
    console.log("F")
    grade = "F"
}
else
{
    console.log("Enter a correct percentage")
}
switch(grade)
{
    case "A+":
        console.log("You Have Done Excellent Job")
        break;

    case "A1":
        console.log("You have done great job")
        break;

    case "A":
        console.log("You have done good job")
        break;

    case "B":
        console.log("Satisfactory performance")
        break;

    case "C":
        console.log("Keep it up")
        break;

    case "D" :
        console.log("You have just pass")
        break;


    case "F":
        console.log("You are fail in exam")
        break;
}