enum Sectors {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Employee = {
    nome: string,
    salario: number,
    setor: Sectors,
    presencial: boolean
}

const filterEmployees = (employees: Employee[]): Employee[] => {
    return employees.filter(employee => {
        return employee.setor === "marketing" && employee.presencial === true
    })
}

const companyEmployees = [
    { nome: "Marcos", salario: 2500, setor: Sectors.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: Sectors.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: Sectors.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: Sectors.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: Sectors.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: Sectors.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: Sectors.MARKETING, presencial: true }
]

console.log(filterEmployees(companyEmployees))
