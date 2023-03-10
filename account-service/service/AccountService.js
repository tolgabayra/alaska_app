const { pool } = require("../config/DbConnect")


// Check transaction 

const withdraw = (id, amount) => {
    const text = `
    UPDATE tb_accounts SET balance = balance - $1 WHERE id = $2
  `
    return pool.query(text, [amount, id])
}



//Check transaction

const deposit = (id, amount) => {
    const text = `
    UPDATE tb_accounts SET balance = balance + $1 WHERE id = $2
  `
    return pool.query(text, [amount])
}




const create = (data) => {
    const text = `
    INSERT INTO
     tb_accounts(
        type,description,balance,credit_line,created_at,updated_at
        )
        VALUES($1,$2,$3,$4,$5, now(), now())
    `
    return pool.query(text, [data])
}

const destroy = (id) => {
    const text = `DELETE FROM tb_accounts WHERE id = $1`
    return pool.query(text, [id])
}

const show = (id) => {
    const text = `SELECT * FROM tb_accounts WHERE id = $1`
    return pool.query(text, [id])
}

const list = () => {
    const text = ` SELECT * FROM tb_accounts`
    return pool.query(text)
}

module.exports = {
    create,
    destroy,
    show,
    list,
    withdraw,
    deposit
}