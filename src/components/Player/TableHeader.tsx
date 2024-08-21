import React from 'react'

export type TableHeaderObject = {
    name: string,
    underName: string
}
interface Props {
    statsHeader: TableHeaderObject[]
}

export const TableHeader: React.FC<Props> = ({ statsHeader }) => {
    return (
        <tr style={{ display: 'flex' }}>
            {/* 195px widt this part? */}
            <th style={{ width: '120px' }}>Date</th>
            <th style={{ width: '30px' }}>Team</th>
            <th style={{ width: '45px' }}></th>
            {statsHeader.map((statObj, index) => (
                <th 
                    className="dropdown-container"
                    style={{ position: 'relative', width: '50px' }} 
                    key={index}
                >
                    {statObj.name}
                    <div className="dropdown">
                        <h2 className="dropdown-content">
                            {statObj.underName}
                        </h2>
                    </div>
                </th>
            ))}
        </tr>
    )
}
