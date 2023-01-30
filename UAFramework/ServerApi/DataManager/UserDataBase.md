# **Handling User Database For Player Data**

Call the DataManager Class from the UAFramework

``` lua
local UAFramework = require(path.to.path)
local DataManager = UAFramework.DataManager
```

Then we want to Call the ".createUserDB" constructor
```lua
local ManageProfiles = DataManager.createUserDB(name)
```

# Methods When Managing Player Profile

To open a player profile, we use this:
``` lua
local Profile = ManageProfiles:OpenProfile(player)
```

Use the ":Get" method to retrive the player data from the Database

``` lua
Profile:Get() -- return data from the database
```

Use the ":Update" Method to Update the Profile

``` lua
Profile:Update(function(currentData)
    -- add your little code here 

    -- Note: currentData is always in a table form

    return currentData
end)
```

Now use ":ListenForError" to listen for errors projected from the profile

``` lua
Profile:ListenForError(function(Type)
    if Type == "Session" then
        -- session locking code here
    elseif Type == "DataNotUpdated" then
        -- code here if player's data is not updated
    elseif Type == "DataNotSaved" then
        -- code here is player's profile is not closed
    elseif Type == "DataNotLoaded" then
        -- code here if player's data is not loaded
    end
end)
```

Now use ":CloseProfile" to store and remove the profile

``` lua
ManageProfiles:CloseProfile(player)
```

Now use ":ResetProfile" to return the profile to its default state
``` lua
ManageProfiles:ResetProfile(player)
```

### We are done with the player profile

# Managing Profile Changed Signal
``` lua
ManageProfiles:GetChangedSignal(Type):Connect(function(player, data)
    -- data from the data parameter will return if Type = "ProfileUpdated" else it would return nil
end)
```
This detects if anything has changed with the data

# Creating Templates
``` lua
ManageProfiles.CreateTemplate {
    Cash = 0,
    Token = 0,
    Tickets = 0
}
```
This creates template that specific datastore.

# Reading Templates
``` lua
ManageProfiles:ReturnExsistingTemplates()
```
This returns all the templates created

# Reading Profiles
``` lua
ManageProfiles:ReturnExsistingDatabaseProfiles()
```
This returns all the exsisting Profiles created