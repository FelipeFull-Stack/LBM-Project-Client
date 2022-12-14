
function CardDisplayCustomer(props) {
    const { cpf, age, name, email, phone } = props;

    return (
        <div>
            <p>{cpf}</p>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export { CardDisplayCustomer }