---
title: Gitting Gud with Git
date: "2019-08-27T02:36:23.450Z"
description: Git this...I'm going to teach you the  basics of Git. Hopefully you can Git gud too. 
---

# The Git World and You

Git is a  tool that is used by mostly everyone. As a programmer, you must have used git at least once or twice...or ten thousand times. Git is not even a world so that title is wrong. Its more like a  universe. We have seen some it but not all of it. If you are a pro  with git then what are you doing here? Refresher? Ok cool. Now for those who don't know what Git is, please take a seat and relax. And for those who do know what Git is, I see you near the exit...smart. 

## Version Control

Have you ever heard of Version Control? According to the Git website, "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later". For example, you are working on a website and you want to incorporate 2 features. One of the features could possibly break some of your existing code but you still include it. Now things are breaking. With the use of Git, you can easily revert back to a time  when the website was just functioning fine. Or you can test these new features by just using a different branch. Same code, new features, easy to get rid of incase all does not go  well. 

There are many VCS (Version Control System) out there. There's Apache Subversion, Git, Mercucial, and many other more. The point of this blog is not to make a comparison but get your feet wet. We will be using Git  for this blog since this is the most known VCS out there. 

## Git Basics

Git was started by Linus Torvalds. If you don't know who he is, I suggest you read about him. He is also the creator of the free open source Linux Kernel which is the  back bone of all Linux OS'. He still maintains both to this day. 

Now I'm just going to teach you some basic commands that you should know. 

1. `git init` - This makes your current directory a git repository. So now you can use other git commands, branch off, and/or back up your work.
2. `git add {file or directory or all}` - Adding sets up the files, directories, and/or changes you want to send to a remote git repository so your work is backed up. 
3. `git commit -m "{message}"` - Committing says that you most surely want to send the files, directories, and/or changes to be backed up. the `-m` means you want to attach a message to the commit. It can  be anything but when working in a team, make sure its a meaningful message. Like  regarding a feature, fixes, or just cleaning. 
4. `git push origin {branch}` - Now this command has a lot to it so allow me to  break it down. `git push` refers to sending the changes and adding files and/or directories to your remote git repository. `origin` refers to your remote git repository's address. That link will most likely be from Github or Bitbucket or your own home grown git server. `{branch}` is just what working branch are you sending this too. `master` is the most important and is usually the default branch for any project you ever start with Git. Why? Well the name makes sense, "Master Branch". Of course, you can name it to whatever. 

Ok now that we have  gone over the basic  commands, let's try  it  out...together...if you would like. 

## The Practice

Before we begin, please make sure you have Git installed. If you are not sure it is installed, type `git --version` into your Terminal or Command Prompt. If you don't have it installed, go to the [Git Website](https://git-scm.com/) and download and install  the latest version. 

Let's create a directory together (these commands you should definitely know). Also please take into note, the term you see down below is a mocked terminal...meaning I wrote it but it  should reflect close to your terminal instance. 

```bash
term:$~ mkdir project1
term:$~ cd project1
term:$~/project1 

```

Now we are in our `project1` directory. Let's initialize it as a Git repository. 

```bash
term:$~/project1 git init
term:$~/project1 (master)
```

Now our repository is setup. Let's add the origin to this repo (short for repository) and add some files. 

```bash
term:$~/project1 (master) git remote add origin {your-git-repo-link-here} 
term:$~/project1 (master) touch index.html index.css
term:$~/project1 (master)

```

For those who don't know what just happened, we just added our remote git repo to our local git repo. That's all it does. Nothing crazy. Are we good? Ok continuing. So now  that I have files, I can send them to my remote git repo but first, I want to edit them first. So...

index.html:
```html
<html>
	<head>
		<title>My awesome website</title>
	</head>
	<body>
		<div class="container">
			<h2 class="super-title">My awesome title</h2>
		</div>
	</body>
</html>

```

index.css:

```css
.container{
	margin-left: 50px;
	margin-right: 50px;
}

.super-title{
	font-size: 34px;
	font-style: italic;
}

```

Cool. So I  have my changes. Now I am going to teach you to see that you have changes in your local repo. 

```bash
term:$~/project1 (master) git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html
				index.css

nothing added to commit but untracked files present (use "git add" to track)
term:$~/project1 (master)
```

If you have a message similar to mine, then you are on the right path. `git status` is just a way for us to see our current files and if there were any new changes to the files or if we will be adding new files to our remote git repo. As you can see, index.html and index.css are both untracked. Meaning they are new and need to be added to keep up with our remote counter part. So let's just do  just that. 

```bash
term:$~/project1 (master) git add index.html index.css //or can just use "git add ." to add all changes and/or untracked files.
term:$~/project1 (master) git commit -m "initial commit"
[master {some-unicode-here}] initial commit
1 file changed, 1 insertion, 0 deletion
term:$~/project1 (master) git push origin master

...You should see some type of output...

```

So as  the last line says, you should see some output of some sort regarding pushing up your work to your remote repo. If there is an error, you probably slipped up somewhere along  the way.  Just go back up and  retrace your steps. 


## In a nutshell

That was using the very basics of Git. Like nothing really crazy. This is the very very bottom of the Git ladder. There are other blogs or articles out there going deeper into Git and how to use it. My job was to  just help you push up your work. I'm just going to leave you with a few tips:

1. Make sure you are adding  the  right files. Always use `git status` to check your work and the files you have changed  or added. 
2. Make sure you are in the right branch. Some bash/zsh/fish/cmd themes help to let you know what branch you are in and if there  are changes that could be committed and pushed.
3. Always push up your code. Do it constantly but not after only changing one line. Just enough times to make sure your code is backed up and your  laptop can just burst into flames without worrying about your work. 
4. Do not push up large files. I mean you can but why? 
5. In case of a fire, git add, git commit, git push, git out. That was stolen from a  meme hahaha...I'll show it below. 

![git-incase-of-fire](https://raw.githubusercontent.com/hendrixroa/in-case-of-fire-1/master/in_case_of_fire.png)
