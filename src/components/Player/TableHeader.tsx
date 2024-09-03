import React from 'react'

export type TableHeaderObject = {
    name: string,
    underName: string,
}
interface Props {
    statsHeader: TableHeaderObject[],
    hasMaps: boolean
}

export const TableHeader: React.FC<Props> = ({ statsHeader, hasMaps }) => {
    return (
        <tr style={{ display: 'flex' }}>
            <div style={{width: '250px', display:'flex'}}>
                <th style={{ width: '50%'}}>Date</th>
                <th style={{ width: '25%' }}>Team</th>
                {hasMaps ? 
                    <th style={{ width: '25%' }}>Maps</th> : null
                }
            </div>

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
