---
title: "You Don't Need It"
description: "On shiny new tools, why we chase them, and why I went back to what I already had."
pubDate: 2026-06-07
tags: ["linux", "workflow", "tiling window manager", "terminal"]
---

# You Don't Need It

You know the feeling. A new terminal emulator drops and it's got gradients, GPU acceleration, and a config file that looks like a love letter to minimalism. A new window manager appears on your feed with buttery smooth animations and a plugin ecosystem that makes you feel like you're building your own operating system. And somehow, by the time you're done watching the demo video, your current setup feels like a relic from the dial-up era.

I've been there. More than once. Here's the short version of how that went.

Here's the spoiler: after trying all of it, I ended up right back where I started. Not because the new stuff was bad. Because what I already had was already good enough.

## The Shiny Stuff

**Ghostty** — a terminal emulator with actual GTK styling that doesn't look like someone glued a text box onto your screen. It's got tabs, it's got splits, and it's got that *look*. You know the one. Everyone is talking about it, using it. 

**Hyprland** — the window manager/compositor everyone is talking about. Animations on workspace switches, rounded corners on everything, blur that doesn't tank your frame rate, and a plugin system that lets you bolt on whatever behavior you want. Best part, Lua. Oh yeah...you can use Lua to configure that bad boy. Oh and the community that churns out rice after rice. Like these look like the most coziest to the most sickest rices I have ever seen and will never be able to do. 

**Quickshell** — It's a desktop shell framework that lets you build your entire panel, notifications, and launcher in QML. The one I am going to be mentioning a lot is noctalia-shell. Noctalia gives you a clean, modern look that fits right into any setup and very customizable.

These tools are genuinely good. They work well, they look better, and they fit into a workflow like they were made for it. Ghostty brings its GPU rendering and all the bells and whistles. Hyprland brings life to your desktop with good plugins, functionality, and looks. Quickshell brings a modern shell experience that doesn't feel like KDE's younger cousin trying too hard. It just brings everything together.

## What I Was Using

Before any of this, I was running **Sway WM**, **Alacritty**, and surprisingly, still **Quickshell** with Noctalia (I used Waybar for a bit but I wanted more without having to use other pieces. I wanted everything centralized). I actually first found Noctalia when I tried Niri, a scrolling compositor, and it stuck with me. Sway is rock solid. It's i3, but on Wayland. No animations, no blur, no fuss. Alacritty is the same thing in terminal form — fast, simple, and it gets out of your way. And Quickshell? Well, I couldn't quit it. Noctalia is just that good, like really **really** good.

## The Experiment

So I did what any reasonable person would do. I switched to Hyprland, installed Ghostty, and set up a Tokyo Night theme across the board to make everything look nice. Noctalia would handle my bar, notifications, and so much more to make everything feel like a true desktop environment. The hy3 plugin for hyprland to handle manual tiling because I actually like controlling how my windows get tiled, tabbed, and stacked.

And you know what? It was great. 

The workflow was simple when it came to coding: Ghostty as my default terminal, and inside it, tmux. But instead of using tmux for everything, I used Ghostty's tabs per project. One window, multiple projects. Each tab had its own tmux session for that project's workspace. It worked. It looked good. It felt productive. Now I know a bunch of ya are like "Why not just use tmux for everything?", well at one point I did but I felt like I wasn't using all of Ghostty. So I decided to really go in and try to use as much as I could. I have the software, I should try to use as many features as I can.

Everything was good...until...the crash. I logged into Hyprland and found out that I had upgraded Hyprland and now the hy3 plugin didn't work. So there goes most of my flow and the manual tiling I liked. Now I use Fedora 44. I tried to downgrade Hyprland from 0.55.2 to 0.55.1 but... I just couldn't. DNF just wouldn't let me. I didn't know why and I didn't bother anymore. At this point, I had been trying to fix it for a couple of hours. In order for me to have my flow again, I would need for the maintainer to update the plugin to work with 0.55.2 cause at the time of this writing, on the Hy3 Latest Release, it's stated ["Compatible with hyprland 0.55.1"](https://github.com/outfoxxed/hy3/releases/tag/hl0.55.0). Now the maintainer is pretty busy (they also work on Quickshell), so I am not gonna bother them by opening an issue saying "HEY, it's not working with hyprland 0.55.2. Plz fix !!". It doesn't work and I needed to get work done. Luckily, I still had Sway.

## The Return

I came back to Sway. Luckily everything still worked as I had left it. Although there were some things I wished Sway had that Hyprland has. One of them being maximized windows. I loved that feature. One window was too small while working in it, MAXIMIZE. I know that with the Hy3 plugin, there was a tab layout. But for some reason the maximize felt like I was hiding stuff from my fiance...although I wasn't. I really wasn't. I just liked when I worked in splits and I needed to make the window bigger in order to see more, I would just maximize it. Then when done, just toggle it back. Plus with the tabbed mode, it consumed more screen real estate. I know it sounds stupid. Let me be.

Anyways, I started researching and looking around. Sway doesn't support maximized windows. So what did I do, I went to Claude to rubber duck a little. What did I end up doing? Toggle floating but make sure the window was using as much screen real estate as it can. No not full screen. I wanted the bar to still be visible. Here is what I did:

```
bindsym $Mod+m floating toggle, resize set width 100ppt height 100ppt, move position 0 0
```

Is it perfect? Fuck no. I can still accidentally drag it around. After toggling it back to the container, it doesn't go back to the old position it was in the tile unlike Hyprland that would put it back where it was. Is it doing what I need though, yeah it is. And you know what? It's good for me. 

## Settling on Simple

In Sway, I had continued to use Ghostty for a while. Then I asked myself "Sway has a tab mode. Why not just use that?". So I used multiple Ghostty windows in Sway's tab mode. But...I was starting to hate the way it looks. And I kept going back and forth with just using one Ghostty window with multiple tabs or multiple tabs of Ghostty windows. I kept fighting myself on this for a bit. Then...I accidentally opened Alacritty and saw the first thing that opened was tmux. Right off the bat. So I was like why not just use multiple Alacritty windows in Sway's tab mode. And that is what I have been using for the past couple of weeks. So far so good. Not fighting or anything.

---
**One side note**, in Sway's Tab mode, the name of the window get's used in tab bar. A little hack (maybe not a hack and people already know this) I used was to set the window title when changing to a tmux session. I used hooks. The code is this:

```
set-hook -g client-attached        'run "printf \"\\033]0;#{session_name}\\a\" > #{client_tty}"'
set-hook -g client-session-changed 'run "printf \"\\033]0;#{session_name}\\a\" > #{client_tty}"'
set-hook -g client-detached        'run "printf \"\\033]0;alacritty\\a\" > #{client_tty}"'
```
Instead of just getting "alacritty | alacritty | alacritty", I now have the session names where the tab bar is. Back to the rest of the journey.

---

I didn't just move back to Sway cause Hyprland broke. I didn't replace Ghostty cause it was slow. These are awesome pieces of software and they have their strengths but I realized simple was good enough. Sway's config reads like plain English — declarative and easy to follow. Don't get me wrong, Lua is a great language but I think I prefer Sway's config more. Ghostty has a lot of features and is performant but...I don't need it. I thought I could just have these nice things but I already had these nice things. I don't need fancy animations. I don't need a super performant terminal emulator. I just need something simple and works. Sway, simple and works out of the box. Alacritty, simple and works out of the box.

Sway has a tab mode built right in. So I can have the same flow I had with Hyprland and Ghostty — multiple projects in tabs, switch between them with a keybind — except now I'm using the window manager and terminal the way they were designed to be used from the start. No extra layers. No configuration rabbit holes. Just the tools doing what they already do well.

## Why Am I Telling You This?

Because I fell for it. FOMO. FOMO really got me. r/unixporn, I am looking dead at you cause all you amazing people made some awesome rices and I wanted to have my own but honestly I don't think I actually want it. Then Ghostty. The community talks highly about it and it's worth the praise but I think Alacritty works for me. Again, I'm not saying those tools are bad — they're not. Hyprland is genuinely impressive, fancy, and is incredible. The ecosystem and users are amazing. Ghostty is a beautiful piece of software. From the maintainers to the users.  But I didn't need them. I needed to stop tinkering and start working (says everyone ever).

But I don't regret trying either. You can't know what you actually value until you've had the alternative sitting in front of you. I tried the flashy terminal. I tried the animated compositor. I tried the full desktop shell experience. And you know what I learned? I like simple. I like tools that stay out of my way. I wouldn't have known that for sure if I hadn't spent a few weeks in the deep end. The detour wasn't a waste, I got to try it out and make something out of it. I was just proving to myself what I already had.

Who knows, I may go back to Hyprland one day and switch back to Ghostty but as of right now, I am happy with what I have. I'm gonna stick with it for now...until it's time to try something else.

Oh btw, this is most likely a skill issue. 
