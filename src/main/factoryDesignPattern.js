function Developer(name) {
	this.name = name
	this.type = "developer"

}

function Tester(name) {
	this.name = name
	this.type = "Tester"

}

function EmployeeFactory() {
	this.create = (name, type) => {

		switch (type) {
			case 1:
				return new Developer(name)
				break;
			case 2: return new Tester(name)
				break;

		}

	}

}

function say() {
	console.log("Hi I am " + this.name + "and I am " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John",2))
employees.push(employeeFactory.create("Taylor",1))
employees.push(employeeFactory.create("Jimmy",1))

employees.forEach(emp => {
	say.call(emp)
})
