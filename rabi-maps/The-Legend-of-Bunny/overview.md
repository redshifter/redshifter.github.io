Hello, welcome to my secret page. This contains spoilers for "The Legend of Bunny" (normal and postgame).

This is an overview of what I did to deliver my first true Metroidvania level in any game.

# BACKGROUND
This isn't my first time using a level editor like this. I've used level editors from BUILD Engine to Reggie. People who haven't spent lots of time doing this don't really have much respect for how much work goes into something like Super Mario Maker. I didn't go in expecting anything up to that level.

I wanted to make a plot-driven level, but couldn't think of any good plot so I went with something generic instead. I thought this would take a couple weeks of work and a bit of touch-up at the end, but it ended up taking like a month instead. 

# MAP LAYOUT
I laid out the map on a spreadsheet. I made sure to avoid the edges because I had a feeling they would break things. I had made a "Hall of NPCs" level where the left edge didn't work, so I assumed I should just avoid using that screen. In the end, I used one screen on the right edge after the final boss.

I laid out areas using map tile colors and laid out items. Then I decided which rooms were horizontal/vertical/free-scroll. This didn't take very long compared to actually making the map. I didn't hold to this design like it was a sacred document. If I felt something needed to be changed, I changed it.

From experience, it's always a good idea to make a little bit at a time and then see if what you're trying works. It might not be the fastest way to develop but it's less likely to make you tear out a bunch of crap later on.

Example: As I started trying to lay down map area and go through it, I realized that Rabi-Ribi (and platformers in general) really loves the X axis, not the Y axis. I readjusted a bunch of design and changed my pathing to make this work out better.

Keeping track of your numbers is the key to victory when using a map editor in this fashion. Keep track of every event, every NPC, and every item.

# DESIGN LESSONS
Things I learned from watching a single playthrough.

## People need to know where they're going.
Unless you're trying to design La-Mulana in your level (and you probably shouldn't; not enough useful event triggers), having NPCs be the only way to know where to go is bad.

Getting to a place should be easy. Once your player is in a place, only then can you try to confuse the hell out of them.

## Seana is worst waifu.
Using bosses based on elementals gave me a bunch of endgame bosses that are just completely unbalanced.

But never, ever use Seana. The battle is way too long and boring. You can literally feel your soul draining in a fight with her. If you're going with an elemental theme, may I suggest some Bounce Bounce?

## Never release at midnight on a weekday.
I only got 4 hours of sleep because I was up late watching someone stream. I'm getting too old for this.

## Never release a level if you've made changes to it in the last 24 hours.
Always sleep on it. I rushed it out so I could play Super Mario Odyssey, because I felt I would never be able to finish this stage if I played that and then tried to go back after (this happened with Super Mario Galaxy 2).

I found a major postgame bug in it within the first 15 minutes after release and then GitHub wouldn't let me update my site for long enough that I had to just go to sleep and do it the next day.

## Feedback is essential.
I should have made an "issue" link or something on GitHub for feedback, as I had no place to get input on whether something was off, what worked, what didn't, etc.

# GENERAL NOTES

### Emotes/Cutscenes
I bought the Artbook just to design character expressions. I hated actually typing in emotes though; it was very prone to error to type that stuff in. Also you can't emote past 9. I tried typing in numbers and hexadecimal. Neither worked.

There appears to be some sort of limit on the number of emotes in a line. When you start trying to emote for 3 character at once, you'll start having problems.

I'm not good with character tone. I generally used the rules "Erina doesn't get mad" and "Syaro doesn't use contractions".

Making a utility for lining things up would've about as time-consuming as doing it manually. I'm not doing it now, though. I'd rather make a full utility instead.

[!ET11] makes character 1 tear up.

[~C300] makes the current text box a creepy red, but only if the current character is right bracket (]). You only need to specify this once.

### Block Manipulation
You can't use the standard memory blocks (516-519) without DLC, so I used a bunch of events from the normal game that add and delete blocks. Any event that turns on blocks needs to be placed around events that turn off flags or you'll end up turning them on just by touching where they're going to be.
- EV_VOIDBLOCK (434) was used to turn ON the Rainbow Staircase.
- EV_PLURKBLOCK (455) was used to turn OFF the Red Cross.
- EV_CAVECRYSTALBOSS (345) was used to turn OFF the Blue Cross (108).
- EV_LIBBLOCK (446) was used to turn ON postgame blocks.

I also found a couple other blocks that I didn't use for various reasons.
- EV_AFTERRED3 (441) blows away your fairy after a reload, so I avoided using it.
- EV_REDCYBER (435) is one I just couldn't get to work.

# AREA NOTES

## Computer Room

### Design Philosophy
Copy/paste from the original game. I had to add the hallway to the end-game computer room because teleporting directly to a place despawns entities in that room.

### Teleporting from the Computer Room
Someone wrote down that you can't teleport without a specific event flag set, leading me to believe someone else was making the same kind of level.

## The Beaten Path

### Design Philosophy
The idea was to throw as many cliche JRPG roadblocks in your path as possible but I ended up not bothering past the rockslide and bombable roadblock.

### Entering the Forest
Is Erina thinking about the new world she's fallen into? Add that little touch of entering an unfamiliar world.

It makes no sense to show this after having mobility, so you never see this event if you go left and beat up Ashuri first..

### Weird trees
I couldn't really just tell people what the purpose of these were. If you do postgame, you'll understand.

### Rabi Maker
I added this girl after making the room behind her. It's funnier when you think of it that way.

## F*** Mountain

### Design Philosophy
I gave this place a sarcastic name because I couldn't think of a good name. Instead of a "ravine" I was thinking more of a "mountain". It was meant to be pretty generic, more of a training ground for level design.

### Earthquake Platform
Vertical scrolling rooms are weird. If you put a tile on just the right height, the screen shakes a bit when you land on it. I tried to remove this in most places, but forgot about it here.

### Golden Riverbank after Ashuri
It plays this song after beating Ashuri because the map color is set to Golden Riverbank's color. I didn't bother trying to fix it here as the song being switched to Golden Riverbank is a meme.

Every other time this happens, I tried to handle it better.

### Item Placement
This is a fine art that I haven't really mastered. I just put a bunch of crap in random places.

### Entrance to the Volcano
Hiding this was stupid. The first streamer I watched play ended up going in through the back door (this requires you to bomb a spike, which only works because that spike is fake) so I decided to make it more obvious where the true starting location is.

## Underground Paradise
Forest by Night is still the better song. I tried to switch out Nightwalker as I've never been a big fan of it, but gave up after a while.

### Design Philosophy
This was still kinda a generic area until I decided to use the oversized enemies. It's been a while since I played, so I didn't remember that they're actually really scary to see.

### Aruraune Conversation
You can't get someone past the middle facing the wrong way.

## Hot-Bottom Volcano
The entrance to Hell. I named this area literally the day of release. Why would the top of a volcano be hotter than the bottom?

### Design Philosophy
Spikes, spikes, spikes. And more spikes. I had gotten through quite a bit of level design without ever placing an enemy (those were added near the end), so I decided I needed something to dodge.

### Bomb Bunnies
These are the first enemies I ever placed on a Rabi-Ribi map.

### Kotri's Dialogue
If you watch Erina closely, you can see her getting more and more disappointed at my dialogue work.

### Spike Damage
Based on background. It's too high.

## Floating Fortress

### Design Philosophy
The theme of The Legend of Bunny is that people that are alone will always be alone because people see them as terrible monsters, then they end up becoming that way to match. (I didn't plan it out like that; that's just how it ended up. Clearly my view on life is extremely optimistic.)

Anyway, this area is completely out-of-tone with that. This is just a random sky fortress that represents light and has a bunch of workers doing... something.

### The room at the bottom
It was going to be springs all the way but I thought the better of it pretty early. Hot speed tip: hammer drill into a spring to go right through it.

### The room at the top
I didn't find this area very difficult so I added a bunch of enemies. This made it very difficult. I decided it was fine this way.

### Who spoke first?
If two NPCs are facing each other, which one will the player talk to first? The first player I watched decided to do it in the opposite order from what I expected.

It helps to color-code the text box so the player knows which one they're talking to. Or you could just not put them close together. 

### NPCs
Don't make them your only source of information. Even careful players can gloss right over them, especially if you put someone in the corner that only says "please don't bother me" in the same room.

I tried to make sure there was a good variety of hair color among the NPCs chosen in each place.

### Wordy Commander Dialogue
Telling the same tired jokes... I should've had her jump in angry with the "excuse me" instead of keeping the subplot of dropping the fortress on the Black Tower. People don't play levels to have a wall of text dropped on them.

### After the Commander
I redesigned this room on the last day for... reasons. It was originally just a Light Orb stand and then open air, but I had to change the entire room when I got an idea.

When I redesigned this room, I should have redesigned the rooms before it to match, but I didn't. 

### Light Orb
I really dislike how Zelda II became a game about skipping the candle (or doing 100% All Keys), so please don't skip the Light Orb.

## Watery Void of the Forgotten Goddess

### Design Philosophy
The Hydra Castle Labyrinth of the Rabi-Ribi series. Hidden bomb blocks everywhere in a confusing maze. I liked the height you could get with the Water Orb, but couldn't think of any good ways to use the Y axis.

### Endless Redesign
This is probably the area that was redesigned the most in the spreadsheet. I went from a large expanse to a tiny expanse back to a large expanse. Until I realized I had "fall and respawn" available to me, I had a longer beach length ready to catch you falling out of the Black Tower, but it would've been a pretty boring area.

At some point, I forgot that the Water Orb is necessary to make a water area tolerable and ended up having to put it at the beginning.

Making a beach instead of an underwater cave would have been more fun and I should have thought of that. Maybe if there's ever a sequel... (there probably won't be, given the scale I would want for it)

### Friend from where?
I should've thought better of this dialogue, as there's two "forest" areas and one is clearly more of an area and the other is more of a path. Saying the friend is from the "mountain" would've been better.

### Never use Seana
I put her at the beginning because I had a feeling people would want to leave and find better items. I tried a lot of things to make this battle more tolerable, but the only thing I did was put the Lv.3 Water Orb before the battle (it was originally Lv.1 and upgraded to Lv.3 after the battle).  

### Spark enemies
Apparently an up-drill can just put them in the wall.

### Plot Holes
Degenerate girls in swimsuits are just evil spirits left behind. Probably.

## The Black Tower

### Design Philosophy
The idea was to use the last 7x7 space in a confusing maze styled after The Legend of Zelda Level 9 (first quest). No room scrolling, doors that make a confusing mess, and the spring that brings you up 4 rooms. In the end I added maids too, as it's a Cicini dungeon and I got the vibe of a master being served by her endless maids.

Springs are everywhere so you can go up each floor. Abuse their invincibility frames to deal with rooms more easily.

### Reloading and Music
Reloading your game wipes out music speed modifications, so every save point shuts off background music. Despite my best efforts, you can still probably despawn the music.

### The Twin Crosses
Block manipulation (creating/destroying blocks) makes it easier to have an area where you have to do something in one place to proceed in another place. Using symbols makes it easier to know that you did a specific thing.

### Dark Areas
I wanted this area to be confusing, but not too confusing. There was no way to make a thing more hidden than putting it out of reach of bombs, so areas had to be specially noted.

Rainbow Maids keep you from wanting to stay unless you absolutely know something is there.

### Town member count
After beating Syaro, you may notice the game jumps from 5 Town to 10 Town. As it turns out, you really don't want to have 6 Town members. I used "Credits" to set postgame conditions.

### Approaching Cicini from the left
You can't fall into cutscene triggers because you don't know which way Erina will face and walk. This forced me to make a few rooms leading into Cicini.   

### Bad End
I added this particular trap the day of release, so now every time I see someone go through this room I'm going to be terrified that they'll trigger it somehow. In true Rabi-Ribi fashion, I didn't check what happens if you skip a certain boss, trigger the credits town members, then go back (spoilers: everything is fine). 

### Idol
The name is supposed to be a joke on how SOTN has a dark priest called Shaft. I used a scary text color I accidentally found during NPC design.

I never actually assigned Idol a gender. Is he some creepy guy who possesses girls? I left it intentionally blank.

### Cicini
After all the high level bosses, Cicini was too weak, even after the leveling from 10 Town. I added debuffs to make up for this.

Another hot speed tip: Ban Skill doesn't disable Sliding Powder. You can do quite a bit of damage with this, but you need to have a rhythm; if you mash it, you're taking contact damage. This is a long fight so you want to avoid that.

### Cicini?!
She comes back if you walk back through. There's probably an event flag that gets rid of her, but I didn't bother.

## Cyberspace

### Design Philosophy
I added some cyberspace to fill out empty spaces on the map, and also to sequence break. Eventually I realized I could also use it to activate the path to Hell, and spread around a bunch of items that have a questionable nature. 

### Spikes
Troll room. I made the ability to break out if you had Wall Jump and Fire Orb. Add the requirement of Sliding Powder to get in (and out of) here, and you need to visit all three areas to not have huge problems here.

I had the idea of throwing a hidden NPC in the upper right, but moved it lower in the room.

### Spike Breaker
Did it help?

### Chaos Rod
It was a tile higher originally. I quickly realized how bad of an idea that was.

## Developer Platform

### Develop Tent
This joke will probably be lost on all but one person who plays this map.

### Author Avatar
Wii U Pro Controller batteries last a really long time.

### Super Secret Voice
This was going to have my speedrun time until I decided that speedrunning was too hard.

## Hell

### Design Philosophy
I never had a clear direction for this other than using invisible platforms. Eventually I realized people would hate me forever if it was all invisible platforms, so I put some other stuff in the middle.

I rushed this area because I wasn't that big of a fan of actually making an area like this. I was definitely into the puzzle to get in here, though.

### Welcome Hell
The decision to have a Hell and have you Hammer Roll into it was made all the way at the beginning. I left room for it along the bottom in my initial design. Originally it was just a super secret ending but I turned it into postgame late in the process when I realized I had ways to do that.

### Beginning of Hell
This first room was always there waiting for me to expand upon it. I had the invisible platform theme way back at the beginning. I hope you got the Chaos Rod...

### Middle of Hell (4-Minute Long Stupid Room)
The idea here was to be a marathon. You have to get through a lot of rooms to make the next autosave. I got bored here and kinda just tried to get it over with.

I would have loved to make an area like the Black Tower, but I was out of ways to lock out progress and the 4x5 I had available to me was not enough to do a good maze, so I just made it linear. I can go back and think about what could have made it better, but I released what I released and ~~I'm not changing it~~ I changed it after wcko87 went through it on Hard.

The first person to call anything here an Undertale reference is getting kicked in the dick.

### End of Hell
If you made it this far, you're invested. You expect me to throw some crap at the end to try and make it impossible. Well, I did... for a couple rooms. I think this is the only part where I started getting tilted on my own level so I made it shorter.

### Idol 2 (Miru)
I wanted this to be a painful fight; I succeeded. I didn't even play it on Normal the first time; it took me a bunch of tries on Casual before I just decided to play more defensively.

I actually went back and played it on Normal later, after adding the bakery. It took me a very long time, but I actually won the battle after adding the items. The strategy is to defeat her before she can cut-in.

### Fairy blown away
If you have Miru teleport away after the battle, your fairy stays dead until you reload. If you don't, Noah appears. I decided to just use the former as it made more sense for Erina to leave the system without the fairy, and I was sick of writing dialogue.

### Closing Remarks
I could probably have added more exposition on what Idol was supposed to be, but I didn't care enough. Better to just turn the game off at the end.

# Golden Tower

### Design Philosophy
I put down some areas I cut from The Legend of Bunny II, then I threw down a bunch of bomb bunnies to fill up the rest of the tower. The boss of this area was going to be the (main game) boss of The Legend of Bunny II, but I threw her here instead.

Other than story pieces and lore, there wasn't much done in the way of Legend of Bunny II work. All I had was this little platforming segment for a 0% run. I figured it was time to admit that it's not going to happen.

### Nameless Goddess
I could tell you what this is about and what was going to happen in Legend of Bunny II, but I'd rather not.

### Golden Tower
I was still going to have the Black Tower (upgraded to the Black Fortress) but it was going to be a more varied area this time around. This was going to be one of the themes.

When I backported the idea to this map, making it a tower next to the Black Tower made more sense. 

### Second Developer Room
I transplanted notes from here into there.