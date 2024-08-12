<div style={{minHeight:'100vh', minWidth: '100vw', background: black, display:'flex', flexDirection:'column'}}>
            <h1 style={{color:'#fff', fontWeight:'bold', fontSize: '2em', margin: `100px 0px ${spaceBetween} ${marginLeftSpacing}`}}>
                Trending 🔥
            </h1>

            <div style={{display:'flex', marginLeft: marginLeftSpacing, marginBottom:spaceBetween}}>
                {trendings.map((trending, index) => 
                    <Tab 
                        key={index} 
                        name={trending.name} selectedTab={selectedTab} 
                        setSelectedTab={setSelectedTab}
                        comingSoon={trending.comingSoon}
                    />
                )}
            </div>

            <div style={{width:'100%', marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{width:'95%', height:'1px', background:'#545454', borderRadius:'10px'}} />
            </div>

            <div className="trending-box">
                <ResponsiveTrendingBoxes games={trendingGames} homePlayersLoaded={homePlayersLoaded}/>
            </div>
        </div>