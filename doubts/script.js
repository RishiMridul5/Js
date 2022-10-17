class Student {
    constructor(n, a, m) {
        this.name = n
        this.age = a
        this.marks = m
        console.log('first')
        console.log('')
    }   
    
    checkAge(minPlacementage) {
        let that = this
        if (this.age < minPlacementage)
            return function (marks){
                console.log(this)
                // const elSrtring = this.marks > marks ? 'Eligible for placements' : 'Not Eligible'
                // return elSrtring;
            }
        else
            return (marks) => `Min age criteria not satisfied`

    }
}
const Student1 = new Student('Rishi', 27, 80)
console.log(Student1.checkAge(28)(75))

const Student2 = new Student('Rajesh', 29, 90)