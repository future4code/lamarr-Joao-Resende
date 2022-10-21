enum Role {
    USER = "user",
    ADMIN = "admin"
}

type User = {
    name: string,
    email: string,
    role: Role
}

const printUsersEmails = (users: User[]): string[] => {
    const admins = users.filter(user => {
        return user.role === "admin"
    })
    return admins.map(admin => {
        return admin.email
    })
}

const usersArray = [
    { name: "Rogério", email: "roger@email.com", role: Role.USER },
    { name: "Ademir", email: "ademir@email.com", role: Role.ADMIN },
    { name: "Aline", email: "aline@email.com", role: Role.USER },
    { name: "Jéssica", email: "jessica@email.com", role: Role.USER },
    { name: "Adilson", email: "adilson@email.com", role: Role.USER },
    { name: "Carina", email: "carina@email.com", role: Role.ADMIN }
] 

console.log(printUsersEmails(usersArray))