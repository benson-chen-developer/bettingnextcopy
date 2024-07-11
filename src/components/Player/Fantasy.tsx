export const getFantasyScoring = (league: string): Object => {
    if(league === "WNBA"){
        return {
            "PTS": 1,
            "REB": 1.2,
            "AST": 1.5,
            "STL": 3,
            "BLK": 3,
            "TO": -1
        }
    }

    return {};
}


interface Props {
    paramLeague: string
}
export const Fantasy: React.FC<Props> = ({paramLeague}) => {
    
    return (
        <div style={{
            marginLeft:'50px', display:'flex', width: '200px', flexDirection:'column',
            alignItems:'center'
        }}>
            <h2 style={{margin: '0px 0px 10px 0px'}}>Fantasy Scoring</h2>

            <div style={{
                width: '100%', height: '100px', background: '#1D1D1D',
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', 
                gridTemplateRows: 'repeat(3, 1fr)', gap: '10px',
                padding: '10px', borderRadius: 10, border:'4px solid #f33479'
            }}>
                {Object.entries(getFantasyScoring(paramLeague)).map(([key, value]) => (
                    <div key={key} style={{ color: '#fff', textAlign: 'center' }}>
                        <p style={{ margin: 0 }}>{key} = {value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
