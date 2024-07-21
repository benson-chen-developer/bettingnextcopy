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
            <th style={{ width: '200px' }}>Team</th>
            {statsHeader.map((statObj, index) => (
                <th 
                    className="dropdown-container"
                    style={{ position: 'relative', width: '50px' }} 
                    key={index}
                >
                    {statObj.name}
                    <div className="dropdown">
                        <div className="dropdown-content">
                            {statObj.underName}
                        </div>
                    </div>
                </th>
            ))}
        </tr>
    )
}
