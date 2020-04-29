import React from 'react';

import { connect } from 'react-redux';

import { deleteData, showDelete, showEdit } from './../../actioncreators/libraries'
const Item = (props) => {
    const handleClick = () => {
        props.showDelete(props.data);
    }

    const handleClickUbah = () => {
        props.showEdit(props.data);
    }

    
    return (
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.year}</td>
            <td>{props.data.number}</td>
            <td>{props.data.status ? "di pinjam": "ada"}</td>
            <td>
                <button className="btn btn-warning" onClick={handleClickUbah}>ubah</button>
                <button className="btn btn-danger" onClick={handleClick}>hapus</button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = { deleteData, showDelete, showEdit };

export default  connect(null, mapDispatchToProps)(Item);