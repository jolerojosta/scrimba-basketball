let homeScore = 0
let guestScore = 0


function increment(team,value)
{
    if (team == "home")
    {
        homeScore += value;
        update()
    }
    if (team == "guest")
    {
        guestScore += value;
        update()
    }
}

function reset()
{
    homeScore = 0
    guestScore = 0
    update()
}

function update()
{
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}