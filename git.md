Introduction
0:00
[MUSIC PLAYING]
0:15
DAVID MALAN: Welcome everyone to web programming with Python and JavaScript. My name is David Malan. BRIAN YU: I'm Brian.
0:21
DAVID MALAN: And today we're going to give you a quick overview of the course and then dive right into the course's material.
0:26
So this is meant to be a class taken after a course like CS50, which is the colleges and the extension schools introduction to computer science.
0:33
But even if you haven't taken that class anything approximating that is certainly fine. We assume only prior programming experience in some language.
0:39
And what we'll then do is assuming you know some of the basic constructs of most any procedural or imperative language,
0:45
we'll fill in the blanks along the way both with Python and with JavaScript. Neither is actually assumed.
0:50
And what we'll do over the course of the next several weeks is first dive into Git. So you might know Git if you've used it before as a version control
0:58
software, whereby you can maintain multiple versions of your software. But these days it's actually used for much more than that.
1:03
People will use it not only for versioning their code and for collaborating with others, but also for deploying their code from their local machines
1:11
to some staging server to some testing server and ultimately to production. So it's actually become quite an integral tool
1:16
when it comes to actually deploying your code to the cloud, so to speak these days. Thereafter, we'll transition to HTML and CSS, with which you might already
1:23
be familiar, but we're focused on some of the more modern perhaps some of the more advanced features of both of these languages
1:28
HTML5, specifically the latest incarnation of that, as well as CSS and various selectors that you may or may not
1:34
have used before. But also toolchain, something called SAS that allows you to programmatically generate and maintain more readily, more complicated style sheets
1:42
especially as your web apps become themselves more complicated. We'll then introduce Flask, which is going
1:47
to be a very popular framework for making web based applications using Python. And it's generally considered a micro framework,
1:54
which means there's not all that much complexity to it. It doesn't try to do too much. It really just tries to solve some very common problems so that most
2:01
of your effort when writing a web app with it isn't focused on how do I learn Flask and how do I build with this architecture, but rather how
2:08
do you implement your ideas without reinventing the wheel? And so you'll get that out of a micro framework like this.
2:13
We'll then introduce a bit of SQL, or structured query language with which you can query databases and store your actual data.
2:19
And we'll look at perhaps more complex queries than you've seen or used in the past. We'll talk about the idea of API, or application programming interfaces.
2:28
These can be both your own that you build for your own applications to use, or as you may have used them already third party APIs.
2:35
Data feeds and functional behavior that you can actually access over the web or from some other server that some other company or person has actually
2:42
made available to you to make your applications all the more interactive or featureful. And then we'll introduce JavaScript, which you might have used or tinkered
2:50
with before. We'll introduce the very latest something known as ES6 or ECMAScript 6, which adds a number of features many of which,
2:56
or most of which are supported by today's browsers. But we'll also talk about some of the pitfalls when you try to use some of the latest and greatest features
3:03
and what it might mean to ensure as through transpiling or other techniques that your code will indeed work on any number of mobile devices and desktops
3:11
and laptops these days. And we'll also talk about front ends, the idea of actually building a front end user interface using JavaScript talking about techniques
3:18
like Ajax or SPAs single page applications these days, particularly modern paradigms with which folks are implementing today's web
3:26
applications. Also looking at things like graphics and animation as it can be implemented in JavaScript and inside of a browser.
3:32
And then we'll look at a heavier weight framework something known as Django, which is similar in spirit at least at first
3:37
to something like Flask. Just makes it easier to get going building web applications, but comes with so many more features.
3:43
The proverbial kitchen sink. So when you get a little tired in life of implementing an administrative interface to your web application, or a log in interface
3:50
for your application, or any number of things that a lot of us probably use in various tools. You can start to lean on these larger scale frameworks that
3:57
just come with many more features. And as such, you might have to comfort of it more to its conventions, but you'll end up writing a lot less code than you would otherwise.
4:04
So we'll sort of graduate to that level of framework. And then we'll talk about a world that's generally known these days as DevOps, development and operations kind of united in one,
4:14
in the context of testing like making sure your code actually works and how you can think about that and how you can actually do that when
4:19
writing your code. And then CICD continuous integration and continuous development,
4:25
which is just a fancy way of saying setting yourself up for success with the right tools and with the right scripts,
4:30
the right environments so that when you run a command on your laptop or desktop the code actually goes somewhere and it goes not only into a code
4:38
repository to be saved and versioned and shared with other people, but you can test it automatically and continuously so to speak.
4:45
And you can even deploy it to the cloud simply by having set up some of those steps in advance. So if you're already in the habit now of deploying your applications by kind
4:53
of dragging and dropping them to an FTP server or using some web interface or copying things, all of this now can be automated in very robust ways
5:01
especially that are conducive to collaboration with others. And then toward the end of the term we'll talk about some higher level issues that will
5:07
inform how you go about building web applications after the scope of the class. Scalability. So topics like DNS and load balancing and how
5:14
you think about anticipating that 101st user that might not fit on just one server.
5:19
And so if you now have to have your app on two or three or more different servers, how do you have these servers talking to one another
5:25
and how do you share data among them? What's going to get easy? What's going to get hard as you scale to more and more users?
5:31
And then throughout the semester, we'll talk about topics of security. What you want to do in terms of best practices
5:36
to avoid getting exploited in some way, but we'll also culminate that discussion in a focus on security at the end
5:42
so that when you go out into the real world or back into the real world after the courses lessons, you actually are mindful of especially in the languages and tools
5:49
that we'll use throughout the semester of what you should be particularly mindful of. And then as punctuating the whole semester will be a number of projects.
5:56
So four assigned projects where we prescribe the specifications of some app that we'd like you to build with the whole course's staff and support
6:03
structure. And then one final project that will culminate this semester, whereby you'll be invited to design and implement your own tool that's
6:10
a genuine personal or professional interest to you that somehow draws upon the course's lessons.
6:15
And let me pause there and see before we forge ahead if there are any questions.
6:21
Anything else? Yeah. AUDIENCE: So HTML, CSS, JavaScript-- suppose I don't have any experience on those things?
6:28
DAVID MALAN: Good question. And so what then? So if you don't have any experience in some of the alphabet soup
6:34
that we put up already like HTML and CSS, JavaScript and/or Python, for the most part that's OK.
6:39
I would say that they'll be a bit of a more of a learning curve early on for you. But we will take care to provide students like you
6:45
with any number of resources supplementary so you know where to fill in any gaps. And we'll also introduce these topics in the class itself.
6:52
So all of the topics that we just gave an overview of we'll introduce and dive into in the class.
6:58
It will certainly be advantageous if you've seen them before, but each of the projects and by way of the courses sections and lectures
7:04
where you have all the material you need to succeed, even if most of these topics are brand new. So not to worry.
7:10
Other questions? Yeah. AUDIENCE: [INAUDIBLE] purchase any of the software [INAUDIBLE]?? DAVID MALAN: No need to purchase any software whatsoever.
7:16
All of the tools that we'll use, all of the libraries, frameworks, APIs are freely available now and after the class as well.
7:24
Other questions? No. All right. So first on the agenda today is version control
7:31
and Gits in particular, a tool that you'll use not only to version your code and share your code,
7:36
but also ultimately deploy it. So without further ado allow me to turn things over to Brian. BRIAN YU: Thank you very much.

---
```
git
7:42
All right. So the first topic that we're going to be talking about today as we approach the world of web programming and web development
7:47
is thinking about when we're designing projects, how do we keep track of different versions of our code? How do we collaborate with other people?
7:54
How do we make sure that if we make a change and that change doesn't work that we have an easy way to go back to older versions of our code
8:00
and make sure that we have access to those as well? And so all of that falls under the larger umbrella of what's called version control.
8:06
And out there, there are some number of different version control software that people are using on a day to day basis, but one of the most popular
8:12
is a piece of software called Git, which is a version control tool that we're going to be using in this class and that people often use in industry in order to help maintain and manage
8:20
different versions of their code in order to keep track of their projects and make sure that everything is organized
8:25
and that they're able to effectively collaborate with other people along the way. So we'll take a moment to step back and talk about the different things
8:32
that Git does for you at a high level. And then we'll dive in and look at the actual commands that you would use in order to run Git, understand how it works
8:39
and actually make use of it. So the first thing that Git's good at doing is keeping track of different changes to your code
8:45
so that if you're making changes, you don't only have access to the latest version of your code, but if you start out with a particular file
8:50
and then you make changes and add another line to it, you remove a line to it later you can keep track of all of those different versions of those files
8:57
such that you know the history of your project and how it's developed from the beginning all the way up until where you are now.
9:03
So that's one thing Git's particularly good at. One other thing the version control is very useful for is synchronizing code between different people.
9:10
Very often in the modern world you're not the only person working alone on your projects independently, but rather you
9:16
and one or more other people are working together collaboratively trying to work on a project together and making sure
9:21
that you and the people you're working with stay in sync in terms of your code is often a challenging task. And what Git, another version control softwares
9:28
like it do is help to make that process a little bit easier. So you can imagine that maybe we're storing a version of your code
9:34
up in some remote server somewhere. And Git what will allow you to do is make sure that you and someone you're working with both have access to that same code.
9:41
And when you both make independent different changes to that code there's an easy way via which Git can merge those changes back
9:47
together so that there's a central version that has all of the changes to which both of you will then have access to.
9:53
So synchronizing code between different people and making sure that everyone has access to that code base is something that is also useful with regards to version control.
10:01
In addition, Git is also very good at letting you test your code without losing your original copy.
10:06
So if you have a working program or a working web application and you want to make some modifications to it in order to add a new feature
10:13
but you're worried that adding that new feature might break some prior feature that's already existing within your web
10:18
application, Git's very good at letting you test your new changes and experiment with your code without losing track of that original.
10:25
And only once you're happy with the original code that you have can you then merge your new changes in with the existing
10:30
changes so that you never lose a working copy of your web application And finally, one last thing to Git is very
10:37
good at is reverting back to old versions of your code. So you've been working on your project, you've made some number of modifications or edits,
10:43
and you realize that your most recent version of your program doesn't work, you want to go back to some previous version of your code.
10:49
Git is also very good at allowing you to revert back to old versions of your code. And we'll see examples of all of that in just a moment.
10:56
So that's sort of the high level overview of what Git is and how it works. And in this course we'll also be using another service known as GitHub.
```
---
```
GitHub
11:04
And GitHub is just a website whose purpose in life is to store Git repositories on the internet. It's to give you and people all around the world access
11:11
to Git repositories on the internet, such that you can look at repositories that other people have created and contribute to them or use them, and such
11:18
that you can work on your own projects, push them to GitHub so that your collaborators or other people on the internet can also see and use
11:25
and work on those projects as well. And so one of the first things you'll do in this course is go to GitHub.
11:30
And if you don't already have an account already you'll create a free GitHub account. And once you do, I'll show you what GitHub's interface looks like.
11:37
We'll just go to get github.com. And so this is what github.com might look like once you log in.
11:42
And what we'll do right here is we're going to first create a GitHub repository. And repository is just a fancy word for the place
11:49
where we are going to keep track of all of your code and all of the changes to your code. Think of it as like a central storage place where
11:55
we're going to store your project. So in the upper right of GitHub's screen we have the plus button and we can go to the new repository.
12:02
And this takes us to the page where we can create a brand new repository. In this case, I'm going to name the repository Lecture Zero.
12:09
And I'll go ahead and just click Create Repository. And that creates a new repository for me that stored on GitHub.
12:15
Right now it's not on my computer yet, but we'll see in a moment how we can take this repository which is right now empty but on the internet
12:22
and download a copy of it to our own computer. And so that's where we start to introduce some of the command line
12:27
interface of Git and the commands that you might run in order to use it. So after you've installed Git, one of the first commands you'll want to learn
```
---

```
git clone
12:34
is git clone. And the git clone command has just one purpose. What it does is it takes a repository stored somewhere
12:41
else like on some server like GitHub. And what happens is that when you run git clone followed by the URL of that GitHub repository, that remote version of your code
12:50
will be downloaded onto your computer so that you have a copy of the repository on your own computer.
12:56
So I'll show you what that looks like now. We'll head back over to the GitHub repository that we just created over here.
13:02
And what you'll notice is that GitHub provides me with this URL. This is the URL of this GitHub repository.
13:08
So if I go ahead and copy that to my clipboard and open up a terminal window, for example, what I can do
13:13
is type git clone followed by that URL, just pasting it right in there.
13:18
When I press Return it already exists because I already created it. So I'll go ahead and remove the old version of that.
13:25
Sorry about that. And we'll do git clone pasting in that repository.
13:31
And it's giving me a warning. Warning you appear to have cloned an empty repository, which is to be expected because the repository that I just created was in fact empty.
13:39
And I can CD, CD for change directory, if you're unfamiliar with the command line interface into that Lecture Zero directory.
13:46
And now I'm inside of that Lecture Zero directory. Which if I take LS for list or list all files
13:51
in that directory nothing shows up. So this directory is currently empty. So let's go ahead and fix that.
13:56
Let's add some code to this repository. I can use the touch command where touch is just
14:03
a command that if you're unfamiliar with it can help to create a brand new file. And I'll create a new file called hello.html.
14:11
And I'll open up that file using a text editor. In this class you can use whatever text editor you wish.
14:17
But common ones include Adam which I'm using here, but also Sublime and VS Code and many others.
14:22
And I'll just go ahead and create here a simple HTML web page. No worries if you haven't seen HTML before
14:28
and this looks unfamiliar to you. Later on during tonight's lecture we'll dive in more depth into what all this code means if you haven't seen HTML
14:34
before to understand what's actually happening when I create this web page. But in essence, what I'm going to do is create
14:40
a website whose title is my web page and whose contents just say hello, world.
14:49
All right. So there I have it, a simple HTML web page. Again, not to worry if you haven't seen this type of thing before.
14:55
But now I want to take that code and save it. I want to make a what's called a commit to my repository
15:01
to say these are changes that I want to save because one day I might want to refer back to them, for instance.
```
---
```
git add
15:07
And so the next thing we'll need to know is git add. And the git add command basically means we're
15:12
going to take some number of files, one or more files that we've changed and tell Git that these are files that we want to include the next time we
15:20
make a commit, to the next time that we save a version or a snapshot of the current repository.
15:26
So for instance, if I say git add followed by some file name, what that's going to do is tell Git to track that file.
15:34
That this file is a file that I want to track the next time that I save a copy of the repository.
15:40
So what does that actually look like? If I do ls right now, again, list all the files in the current directory,
15:45
you'll see that I have hello.html, that file that I just created. And what I'll do now is I'll say git add hello.html.
15:55
To mean, I want to take hello.html, and I want to include that the next time I save a version of this repository.
```
---
```
git commit
16:01
Nothing appears to have happened, but that's OK I have now added hello.html as a file that I want to track the next time I make a save.
16:09
So what does that process look like? That comes in the form of a command called git commit. Commit it just fancy way of saying take a snapshot of the repository
16:17
in the current moment and save it. And so how that would work is I would say git commit followed by a flag dash
16:24
m, m for message, and then in quotation marks some English message describing what it is that I've changed in this commit,
16:30
describing what it is that's happened in this change that makes it different from previous versions of the code. This is useful because as you begin working
16:37
on a project that has dozens or hundreds or even thousands of commits, later on you can refer back to this list of messages
16:42
that you yourself have written describing what happened in any successive change, so that you know where to look if you're trying
16:48
to find a particular commit, or a particular change that you made to your code at any particular time.
16:53
So when you run git commit dash m followed by a short description of what you've done, what that'll do is have Git save a new version or a new snapshot
17:01
of your repository in that moment keeping track of all of your old versions as well. So that's git commit.
17:08
And we'll take a look at that now. I'll do git commit dash m for message.
17:13
And the message that I want to include in this case is just added hello.html.
17:18
That's what I did. I'll press Return. And what you'll notice is that Git provides me some helpful information about what it is that I just did.
17:25
It said one file changed at nine insertions because I added a new file and that file had nine lines in it.
17:31
And so now Git has kept track of the fact that in this commit, in this save I have added this hello.html file that
17:37
has the contents that you just saw a moment ago. So that's me making a save to the contents of that file.
```
---
```
git status
17:44
Next command that's often helpful to know and to be familiar with is git status. Git status is a simple command that effectively just tells you what's
17:52
currently going on in your repository. If you forget whether you've made new commits since the last time you checked
17:57
from GitHub, if you forget whether you've made new changes that you haven't committed yet, git status is an easy way to just run git status
18:03
and see the current status of what's going on inside of your repository. So let's take a look at the code that we've been working on.
18:11
We'll go ahead and run git status on it. And what we see is on branch master--
18:16
don't worry about branches too much. We'll dive into more depth about that next week. But importantly, we'll see that we are based on origin master
18:26
and right now it says we have nothing to commit. So git status effectively tells us the current status of the repository,
18:33
tells us what's going on with our repository at any given moment. So next up we've made these changes to our repository.
```
---
```
git push
18:42
The next question is, now how do we send those changes back to GitHub? GitHub's keeping track of our repository on the internet
18:48
and we've made changes to the repository adding hello.html on our computer locally, but that isn't yet reflected on GitHub.
18:55
If we were to check the GitHub page for this repository it would still currently be empty. So how do we then send those changes to GitHub?
19:02
That's called a push, where we push our code from our local computer to the repository that's stored somewhere on the internet.
19:08
And so when we run git push, that causes those changes, whatever changes that we've made to our code locally
19:14
to be pushed to the remote server so that GitHub is now able to keep track of those changes that we've made.
19:20
So that is git push. And I'll go ahead and try and show you that now. If I try and run git push it pushes those changes to the GitHub repository.
19:32
And now if I go back to here, this GitHub page for student50/lecturezero, which is the repository page on GitHub, and refresh that page
19:41
you'll notice that now there's contents here. Now I have an hello.html file that's located inside this repository.
19:47
And if I click on it then you can see the contents of that hello.html file
19:52
that is now stored on GitHub as well. So I've now taken my changes that were just on my computer before
19:57
and I'll push them so that they are on the internet as well for people to see.
```
---
```
git pull
20:02
So that's git push. Next up is sort of the inverse of that. Git pull. What if someone else has been working on your repository,
20:10
has made changes to it, and pushed those to GitHub? And now you want to download the latest version of that repository.
20:16
You want to download the latest changes down onto your computer locally to take a look at it. How would you go about doing that?
20:22
That's by a different command called git pull. When you run git pull, if there are other changes that have happened on the remote server, notice that here locally I've
20:29
made one change, but someone else on GitHub for instance has pushed some second change that's been made to the code.
20:35
If I run git pull, that causes any of the latest changes that have been made on the remote server to be downloaded onto my own computer
20:41
so that I now have a working copy of the entire history of what's been going on with my project so far.
20:47
So that's git pull. And we'll show you a quick example of that now. If I go back into the GitHub interface there is sort of two ways
20:54
to make changes to the code that you see here on GitHub. Either I can change that code on my own and my code on my computer,
21:00
or actually GitHub's web interface actually has a button here that lets me edit this code. So let's say I wanted to add another line that
21:08
says hello, again, for instance, that I wanted to add to this file, I can scroll down and go ahead and commit those changes.
21:15
Again, commit is just a fancy way of saying save or take a snapshot. And when I commit those changes what I see
21:21
is that the contents of my web page on GitHub show hello, world and also hello again.
21:27
But if I were to check my computer I just have hello, world. Just the one sentence. That change has been made on GitHub.
21:33
It hasn't yet been reflected in my version of the code that's stored on my computer. So what can I do now?
21:40
I can run git pull to say pull down any of those latest changes from GitHub.
21:45
I press Return. And notice that it says hello.html. Two changes, one plus and one minus.
21:51
One insertion, one deletion. Git's not quite smart enough to know that I actually took a line and changed it.
21:57
As far as Git is concerned I removed that old line that just said hello, world, and added a new line that
22:02
said hello, world, and hello again. So if I check my code now going back here, I see that it's now updated.
22:07
My local version on my computer now says hello, world, and hello again because that was the change that I had just pulled down from GitHub.
22:14
And so via pushing and pulling code can you and other people that you're working with collaborate together on a repository
22:20
and make sure that you're keeping track of any changes that you make. But what can go wrong here? What might happen and cause things to not seem as simple as they are?
22:30
Well, what if I decided to make a change here? Hello a third time.
22:36
So I make that change and I decide to OK, git add hello.html.
22:42
I want to track that. And git commit, add a third line.
22:48
So now I've added that third line to the contents of my hello.html file.
```
---
```
Merge Conflicts
22:53
But what if someone else on the internet who has access to my GitHub repository
22:58
decides to edit it differently and decides to say hello, hello, hello,
23:05
and save those changes by committing them? Now the online version says hello, world, hello again, hello, hello,
23:12
hello, but in my local version of the code it says hello, world, hello again, hello a third time.
23:18
And if I try now to pull this code from GitHub it's not going to be as simple as it was last time of just updating the changes
23:24
because Git doesn't quite know which change I actually want. Here I've added a sentence online that's a different sentence.
23:30
So we're going to need some way to reconcile those two things. And so that's where we introduce the concept of merge conflicts.
23:37
Git will try whenever it can to automatically take any changes that have been made and combine them together automatically
23:42
for you without you needing to worry about what's going on. But in some cases, if you and another person have both made changes to the same lines of the same files
23:50
you may run into a merge conflict, which is what happens when you try and run git pull. But what happens is that there's some sort of conflict.
23:57
The pull can't happen. And so what you'll see is a message that says automatic merge failed. You need to fix the conflicts and then commit the results.
24:05
So what does that look like? Well, what will happen is that if you open up the file with the conflict you'll see something that looks a little bit like this.
24:11
You'll see a file with a bunch of less than signs and then HEAD, some lines and then equals, equals, equals,
24:17
some more lines and then this sort of random long sequence of numbers and letters. It might seem a little bit arcane at the moment,
24:24
but we'll break down what this actually means. So when you look at a file like this, which results whenever there is a merge conflict produced by Git,
24:31
there are a couple of things to keep in mind. One is that anything between HEAD and all the equal signs are your changes.
24:38
The things that you did on your computer before you tried to do the pull. Anything between these equal signs and the greater
24:46
than signs here, these are the remote changes. The changes from GitHub that you were trying to pull down that
24:51
were somehow in conflict. That these two lines couldn't automatically be merged together. And this long sequence of numbers and letters is the conflicting commit.
25:00
Whenever you make a commit in Git, Git represents that using a long hash. Just a long sequence of numbers and letters
25:06
so that you can uniquely identify one commit out of a series in a history of commits. And this long sequence of numbers and letters
25:13
is just the name of that conflicting commit. It is that commit hash of the one that caused the conflict.
25:18
So what do you do in a situation like this? All you need to do is remove all of the lines you don't want.
25:24
Remove all of those less than, equal than, greater than lines and also remove whichever part of the code
25:30
you didn't want leaving only the version that you want to be merged together, and then get rid of any that extra white space
25:37
and then you can commit the result. So I'll show you what that looks like if we go back over to the computer here.
25:43
Recall again, that locally we had three different sentences. And online we had three different sentences,
25:49
but the third sentence differed. So now if I try and run a git pull what you'll notice
25:54
is that we see exactly this. We tried to automerge hello.html, but there was a conflict. There was a merge conflict in hello.html.
26:02
The automatic merge failed. We need to fix the conflicts and then commit the results. So if I take a look at hello.html, my text editor Adam
26:12
is automatically highlighting things in certain colors for me. But what you'll notice is you see this less than, less than head,
26:17
and then this version, which was my version, hello a third time. And then this version down here, which is the version from online.
26:25
Git doesn't know which one I want, so I need to pick. And I'll just say you know what? Let's use the version that I had.
26:32
So I'll go ahead and get rid of all of these extra lines
26:44
so that I'm left with just the version that I want, the one that says hello, world, hello again, hello a third time.
26:49
And if I then commit those changes, now Git knows because I have told it this is how I want you to resolve the merge conflict.
26:56
Now Git is aware of how to go about merging the two different versions of that repository together in order to come up
27:02
with one version that is going to work for everyone. So that's the process of resolving merge conflicts.
27:08
It can seem a bit complicated at first, but as you start to deal with them you'll start to get a sense for where the different changes are
27:13
and how to go about resolving them. And it's something you may run into as you go about the process of working
```
---
```
git log
27:19
on your project. A couple other useful commands that are useful to know. One is git log.
27:24
What git log does is effectively just show you a history of all of the commits that you've made. If you run git log while you're inside of a Git repository,
27:31
you'll see a list of all the different commits that have been made. Notice again that you'll see each commit is marked by a unique commit hash.
27:38
Just a sequence of numbers and letters describing that commit. You'll see who made the commit, when that commit was made,
27:43
and also a description based on that message that you provide whenever you make a commit of what it is that happened
27:49
in that commit so that you can see the history of what's been going on in your repository. So that's git log.
```
---
```
git reset
27:55
And then one other command that's useful to know is git reset. So we talked about before if you've made some changes,
28:00
realize that you messed up and you want to go back to the way things were before, you can run one of these commands
28:06
if you do git reset --hard, followed by a commit hash like the numbers and letters that we saw before.
28:12
That will reset your whole repository back to that version, whichever version was marked by that commit hash.
28:17
And likewise, if you run something like git rest --hard origin/master,
28:23
origin/master is a fancy way of saying the version of the repository that was the origin of this repository where I got it from.
28:30
In other words, if I cloned my repository from GitHub then running git reset origin master is going to reset the contents to my repository
28:38
back to the version that was previously on GitHub so that then I am able to see whatever it was originally.
28:45
So in this case, if I run git reset --hard followed by the commit hash of some previous version of the code,
28:51
what that's going to do is reset that code back to that older version, and now my repository is back to a previous version
28:58
such that I can correct my mistakes and then continue working appropriately. And so we'll show a quick example of that.
29:05
So first of all, commit my changes. So just now I fixed the merge conflict and run a quick git status.
29:16
Oh. I need to add the files before I commit them. So that's a good lesson to be learned. The way Git effectively works is that we first
29:23
need to add the files to what's called a staging area or an index. Just telling it these are files that I want to track in the next time
29:30
that I make a commit and then you commit after that. So if I git add hello.html and then git commit, fix the merge conflicts,
29:38
that will resolve the issue. And if you're looking to simplify these two commands into one simpler command know that you can also do a command like git commit -am,
29:46
where the a stands for add to both add files to the staging area and commit them all together in one command.
29:53
So go ahead and press Return there. And now if I run a command like git log, what you'll see
29:58
is a history of all the different commits that I've made now. Here was me fixing the merge commits, here was when I updated HTML online,
30:05
here was when I added a third line to the repository. So I see the history of all of the different
30:10
commits that I've made to this repository. And let's say I wanted to reset back to an older one of these.
30:16
I wanted to reset back to this original one where I first added hello.HTML. I can take this commit hash, the commit hash
30:23
of when I first made that change, or even just the first couple characters of the commit hash is usually sufficient to be able to identify it.
30:30
And I can run a command like git reset --hard followed by that commit hash by pasting it in there.
30:37
And now I've reset the head, reset where I am in this repository back to that older version.
30:44
And now if I check the contents of hello.html, it just says hello, world. Back to that very first version of the HTML
30:50
file that I created way back when I first created the repository. Yes, so Git keeps track of all the different snapshots.
30:57
In fact, if you run a command like git rest log, just a log of all of the different references
31:02
that Git has kept track of you can see all the different changes that are still there. So they're accessible, but they're just not present
31:09
in the current version of the repository as you see it just there.
31:14
Yeah. A question over there. AUDIENCE: Once you run the [INAUDIBLE] what version of the file [INAUDIBLE]??
31:25
BRIAN YU: GitHub was untouched. So the question was, what happens to the remote repository,
31:31
the repository on GitHub when I reset something locally? And the answer is that any changes I make to my computer,
31:37
to my version of the repository on my computer never affect what's going on online unless I try to push
31:44
those changes to GitHub for instance. So if I really screw things up, mess things up on my computer completely
31:50
GitHub's version is still going to be the way it was before. And if I really wanted to I could just download a new copy
31:55
by cloning the old version from GitHub. If I check now, even though I reset my version on my computer
32:01
it still has hello, world, hello, again, hello, hello, hello, because I have never pushed any new changes to GitHub after that
32:08
to tell it to make any additional changes after this point that it knows about. So GitHub doesn't know about any of those additional changes just yet.
32:16
Question back there. AUDIENCE: Yeah. So does Windows or a Mac OS [INAUDIBLE] built into it so [INAUDIBLE]??
32:27
BRIAN YU: Great question. The question is, is Git built into Windows and Mac OS, or is there something special you have to do?
32:32
In many cases, you will need to install Git. When we release project zero you'll find that in the project zero instructions,
32:38
there are instructions for how to get set up with a GitHub account and how to install Git onto your computer and configure it correctly so that it can talk to GitHub.
32:45
But yes, typically you'll need to install it. It's free software that you can install on your machine and it will prove helpful as you go about starting
32:52
to work on version control. Yeah. AUDIENCE: Do merge conflicts only happen if you were trying to pull from the repository and it's different,
33:01
or is there any situation where I'd be pushing changes and not running to a merge conflict?
33:06
I don't know if that makes sense. BRIAN YU: Great question. So the question is, is pulling the only time that you
33:12
might run into merge conflicts? And the answer is no. It's the only one we've seen so far. But any time you are trying to take two different versions of the code
33:20
and combine them, there is a possibility that you'll run into a merge conflict. And so later on in this course, we'll take a look
33:26
at additional features of Git like branching, where you can keep track of multiple different versions of your repository
33:31
at once so that you have your current version of your repository, but you also have a different branch on which you're
33:37
working on some new feature and maybe a different branch where you're working on some other feature. And any time you want to merge two branches together to say,
33:45
OK, this feature is done. I want to bring it back into the master branch or the official version
33:50
of the code, so to speak. Then there's possibilities for merge conflicts there. So pulling is one instance in which conflicts can happen,
33:56
but certainly not the only instance in which those conflicts can happen. Yeah. One more question.
34:02
AUDIENCE: Let's say I entered in multiple files [INAUDIBLE] should I run Git [INAUDIBLE]?
34:09
BRIAN YU: Great question.
34:15
So the question is, all right, so far in this example we've only ever been dealing with one file, hello.html.
34:20
What happens if I have multiple files that I'm working on? As it might happen if I'm working on a larger project, how do I deal with that?
34:27
Well, the answer is that you need to add any of the files that you want saved in that commit.
34:32
And so you could you git add file one, git add file two, git add file three. You can also do git add star, where a star just means add everything.
34:39
And that will add all of the files that you have unsaved. And the advantage of doing things file by file
34:46
is if you've edited three files, but one of those files is unfinished but the other two are ready to go,
34:51
you can just add those two files and commit those changes. You only ever need to commit one after you add multiple files to say,
34:58
I want to save the changes I made to these two files, but the changes I made to the third file aren't quite done yet and I didn't want to add or commit those.
35:05
And so separating the add and commits step gives you that kind of control over your repository to say, these are the files
35:11
that I want to keep track of in the next change that I make to the repository.
35:17
So that was effectively a short introduction to Git and we'll dive into more detail about Git
35:23
later on as we progress throughout the course. But we'll go ahead and take a short, maybe five minute break now.
35:28
And when we come back, we'll start talking about the HTML code that we actually saw before. Diving into HTML, what it is, how it works, and also CSS,
35:35
how we might style our web pages to make them look a little more aesthetically pleasing. So all that when we come back.
35:41
All right. Welcome back.
```
---
```
hello.html
35:46
So now that we've taken a look at version control and how we might go about versioning our project and keeping track of different versions of our project as we go along,
35:53
we'll dive right now into the actual web programming aspect of the course starting by just taking a look at HTML, or HyperText
35:59
Markup Language. This is a language via which we're going to be laying out the structure of a web
36:05
page such that when a user opens up in their web browser, their web browser, whether it's Safari or Chrome or Firefox or some other
36:12
knows how to understand and interpret that HTML and display it as a web page to the user.
36:18
So we'll take a look at a simple example. In fact, we'll just take a look at hello.html.
36:24
Very similar to what we've just been working on with that Git repository. And we'll now break this down and sort of get
36:29
a feel for what's going on in terms of what we see here and how this is going to translate when a web browser reads code like this
36:35
and tries to interpret it as a web page. So up here on line one, we see this sort of funky angled bracket !DOCTYPE HTML.
36:44
This first line just goes mean something along the lines of HTML has come in a number of different versions.
36:50
It's had a bunch of different standards where people specify, here's what's included in this version of HTML and this new version of HTML.
36:56
And the latest version of HTML is called HTML5. And the way that a web browser knows when
37:02
it gets a web page, which version of HTML it's using is by taking a look at that first line. So that first line saying doctype HTML is
37:10
our way of telling the web browser that this web page is written using HTML5.
37:15
So now let's take a look at the rest of this web page. And what you'll notice throughout this web page are a whole bunch of what are called HTML tags.
37:23
Those are these keywords that begin with an angled bracket and end with an angled bracket. Right here we see the HTML tag.
37:30
And all that tag means is that angled bracket HTML ending angle bracket means this is the start of the HTML content of the website.
37:39
And this will go all the way until here on line nine where we see a tag that is angled bracket /HTML, where that slash just means this is the end of the tag.
37:49
So what line two and line nine sort of tell us here is that this is the start of the HTML content of our web page and line
37:55
nine here is the end of the HTML content of our website. And everything in between is the actual contents of that website.
38:02
And if you take a look we've divided that content to the website into two parts. Up here on line three we've started the head of the website.
38:09
Angled bracket head angled bracket. That's the start of the head tag. The head of the website is usually used for a metadata, information
38:17
about the page that doesn't really appear in the main contents of the page, but is used to give the browser important information about how
38:25
to go about displaying that page or other important information about it. In this case, you see we have a title tag here
38:31
where the title in between the start of the title tag and the end of the title tag we've included text, my web page.
38:37
And so as you might guess what this line four is saying, is we're going to have a web page whose title is just my web page!
38:45
And that's going to be the title of the web page. And that's information that's all included in the header of our HTML page.
38:51
In addition to that, on line six here we see the beginning of the body tag and the end body tag is on line eight.
38:58
And in the body of the website very simply we just say, hello, world. And that's it. So what we've described here in nine lines
39:05
is an HTML5 website that's got two parts. It's got a header whose title is my web page.
39:10
That's going to be the title of the page. And we have a body that just says hello, world. And so now if we actually were to open up a web page like this by saying,
39:21
open hello.html, or just opening it in a web browser like Chrome, you'll see that what we get is a web page that just says hello, world.
39:29
And if you notice up there at the top it says that the title of the page is my web page. So as you might guess, Chrome is reading that HTML code that we just wrote.
39:37
And it's interpreting it trying to figure out what means what. And it knows where to put different tags, it knows that the title tag is going to go up here in the title part of my web
39:45
page, and it knows that whatever is in the body is going to go in the main area, the main body of my web page in general.
39:50
So if I changed the title to something else or change the body to something else, it would have reflected here. Of course, this is a very simple website, but it shows you the basics.
39:58
How we use HTML tags to define the structure of our page, and then using those tags we can create pages
40:04
that are rendered nicely when a web browser sees that HTML and tries to do something with it. Questions about that so far?
40:11
Yeah. AUDIENCE: Is the indentation style or functional? BRIAN YU: Great question. So the question is, is the indentation that we saw in that code earlier style,
40:19
or is it functional? The answer is that it's just style. Ultimately Chrome and other web browsers don't really
40:24
care about whether your head tags are indented and your title tags are indented further than that. But it can often be easy when another human is reading your code,
40:31
or even when you're reading your own code to be able to say, OK, here's the head tag and just look straight down here
40:37
is the end of that head tag. And so very frequently you'll see a paradigm like that will indent anything inside of the header,
40:44
but the header itself will be aligned nicely. And oftentimes, you'll see things that when a tag only contains one line
40:50
within it, we'll just put the whole thing on the same line where we have title, my web page, and then /title.
40:56
But we could have just as easily if we had one or two indented the my web page and put the /title on its own line as well.
41:03
And that would render identically. If we go back into Chrome, refresh that page, no changes. Chrome doesn't care about that difference in indentation.
41:10
Great question. Other questions about this first HTML web page that we've created?
41:17
All right. So that was sort of the introduction to just a basic HTML page, but there's a lot more that we can do with HTML
41:25
by taking advantage of other tags. So far we've seen the HTML team tag and the head tag and the body tag.
41:31
And right now all that's able to do for us is render some text. And we can type more text and it would appear there as well.
41:36
But let's take a look at how we might render headings for text because if we have text, maybe we want a heading to go at the top of our page
41:44
and maybe subheadings to go beneath it. And so we'll open up headings.html And what headings.html is going to do
```
---
```
headings.html
41:51
is show you a couple of other tags. So HTML has many, many built in tags, more than we're going to talk about today, but we'll just
41:57
introduce some of the common ones so you can get a sense for how these tags work and the general feel of them.
42:02
And these are ones that will come up quite frequently as you go about writing web programs using HTML.
42:08
And what you see here is in H1 tag located inside the body, where H just stands for heading, like a big headline at the top of the page,
42:15
and one is a number that stands for its size. So HTML has six built in heading tags inside that understand.
42:23
h1 is the largest, h6 is the smallest, and two, three, four, and five, as you might guess fall somewhere in between.
42:29
So this is the largest headline. Starts at h1, ends with the /h1. Notice this continual pattern of angled bracket name of the tag, like h1,
42:38
and then the /h1 to mean this is the end of the tag. This is the end of that head end. So if we open up this page now by going to not hello.html, but headings.html,
42:51
what we'll see is this is what gets rendered. We have this is the largest headline. Again, this was our h1, this was our h2, all the way down
42:58
to h6 at the bottom which is a relatively small headline. And one feature of Chrome and most web browsers
43:05
nowadays is that if I actually want to take a look at any web page and see what HTML actually made it up, I can Control click on the page
43:13
and go to View Page Source for instance. And when I go to View Page Source, what I get is Chrome showing me the actual contents of the page that it had just rendered.
43:22
And this can often be helpful once you start working on larger web applications trying to understand what's actually getting rendered.
43:28
In this case, what we see here is exactly the same thing as what we loaded before because Chrome is just
43:33
showing us the HTML contents of the page that it then renders to look something like this.
43:38
So it's the browser that takes the HTML, understands the tags and what they do, and renders it to look a little bit nicer like that.
43:46
So what are some other common HTML tags that we might want? So now we have the ability to include text in our web pages,
```
---
```
lists.html
43:52
we have the ability to include headings. One other thing that we might naturally want to do is maybe create a list of different items
43:58
where frequently we'll want to have a bulleted list on our web page or a numbered list on our web page or some other type of list.
44:05
And so we'll take a look at possible ways we can do that. And we'll see here in lists.html that I have two different examples of lists
44:12
for you or take a look at. So the start of our web page is the same. We have doctype.html. This is the start of the HTML content of our page,
44:19
this is the start of the HTML header. Here's our title. Then in our body is where things get interesting. So here where I said an unordered list, I
44:27
have this tag ul, where ul as you might guess stands for unordered list. And the ul element goes from here all the way down to line 12 over here.
44:37
And inside of it I have three li's, where li stands for list item.
44:42
This is an item inside of this unordered list. Here's one item, another item, and yet another item. And so these are three list items that are inside of the unordered list.
44:50
And as you'll start to notice the HTML tags very frequently nest within each other. We have an li which is inside of a ul which is inside of the body.
44:59
And this natural way of nesting HTML tags within each other is a nice way of being able to add and make
45:07
your website more complex by nesting more and more of these different HTML tags together in order to create the end product that you ultimately want.
45:14
And so that is a ul, an unordered list. Lower down on the page we also see an ordered list, which as you might guess
45:20
is labeled ol, ol for ordered list. And that one is going to be numbered. We have the first item, second item, and the third item.
45:26
And now if I were to open that up by opening up list.html, what we see is we have an unordered list that just shows up as a sequence of bullet points
45:34
and an ordered list that shows up as a sequence of numbers. Note that nowhere in my HTML that I actually say, OK, this is one
45:42
dot first item, or two dots second item, three dot third item. The web browser knows to render it as an ordered list
45:47
and it puts the numbers there for me, such that if I try and insert another item here I
45:54
don't need to go back and renumber the bullet points. The web browser will take care of noticing that this is the third list item.
45:59
This is now going to actually be the fourth list item.
46:05
And when I render that page it's going to show me here's the first item and the second item, another item, the third item,
46:10
and the fourth item in the list there as well. So the web browser is pretty smart about these things. It knows the names of these tags and it knows what they mean and what they do.
46:18
And it can use that information in order to make a web page that looks the way that we want it to look.
46:24
Questions about any of that so far, or about the tags that we've seen?
```
---
```
image0.html
46:30
So thus far, all the web pages that we've created have all just had text on them. They've had text maybe just written out like unordered list or ordered list,
46:38
they have had headings on them, they potentially had lists whether they're bulleted or numbers. But we'd probably like for our web pages to be a little more rich.
46:46
Maybe. Then we want to have give them some images, some pictures to look at as well. And so inside of my source folder where I have all these HTML files,
46:56
I have a file called cat.jpeg, which is just a photo of a cat. And maybe I want to take this photo of a cat
47:02
and I want to put that on to my web page. How might I go about doing that? Let's take a look now at imagezero.html.
47:12
So what we're looking at here is a simple web page. It looks a lot like the ones we've already seen with one slight difference. so here in the body we see on line seven
47:20
that we have an image tag, but there's something a little bit different about the image tag. In fact, there's two things that you might notice.
47:27
Thing number one, we see the start of the image tag but we don't really see an end to the image tag.
47:32
All the other tags have body and /body, title and /title head and /head,
47:37
but there's no image and then /image at the end of it. And the reasoning for that is that not all of the HTML tags
47:43
require a beginning tag and an end tag, a start and an end because some things like images, it doesn't really make sense to say,
47:50
OK, start the image and end the image and what goes in the middle. You're not going to type text in the middle of the image for instance.
47:56
And so for tags like the image tag you don't need an end tag. It's just sort of a self-contained tag that doesn't
48:01
require an end tag to go along with it. The second thing that you'll notice about this tag is that it's not just the name of the tag.
48:07
The name of the tag is img, for image, but we've also added what's called an HTML attribute.
48:13
And this HTML attribute called SRC, or source is providing additional information to this tag.
48:19
It's saying this is an image tag that I want to render to the web browser. But without any additional information the web browser
48:27
wouldn't know which image to render. It wouldn't know whether to render an image of a cat or a dog or a jellyfish or something else entirely.
48:33
And so what we have to do in this case is provide that information to the web browser. We have to tell in our HTML code here's the name of the file
48:41
that we actually want to render on the page. In this case, it's cat.jpeg, that same file that I was showing you earlier.
48:47
And if instead, the image that you wanted to display was somewhere on the internet, some linked
48:52
to an image that was on Google Images for instance you could just paste in a link to an image and that would render on the page
48:59
as well. So if we then go and open up imagezero.html inside of a web browser, what we'll see is a very big--
49:08
we'll see that cat. And why did the image render so big? This probably isn't the type of interface
49:13
that I want to present to my users. If I want to show my users an image of a cat I don't want it rendering huge.
49:19
And I guess the reason for this just happens to be that the cat.jpeg file that I've stored on my computer
49:25
is a very high resolution image. It's many pixels wide by many pixels tall. And as a result, my web browser without being told any additional information
49:33
about how to deal with something like this is just going to take the image and render it at full resolution because it
49:38
hasn't been told to do anything else. But fortunately, for us in order to control that and have a little bit
```
---
```
image1.html
49:44
more control over what's going on when our web page renders and is displayed to the user, we can add a couple additional attributes to the image tag.
49:53
So what we see here is the exact same web page. We have the image tag and the source attribute,
49:58
but we've added two additional attributes. We specified a height attribute that says render this image that's 200 pixels tall and a width attribute that says render
50:06
this image that's 300 pixels wide. And so now when I open up this same web page but change image zero to image one, it's going
50:14
to just render the image as 300 pixels wide by 200 pixels tall because I've told it using those HTML attributes that this
50:22
is what I want the dimensions of the image to ultimately be. And so we noticed that some of the attributes that we
50:29
use in HTML, like the source attribute, you need that source attribute. If you don't provide a source attribute your web browser's not
50:35
going to know what image to add. But there are many, many more attributes that are optional. Attributes ones that you can include if you want to.
50:41
You can optionally specify the height or the width of the image that displays in your HTML page, but you don't need to.
50:47
But you should be careful because your web browser is just going to listen to you no matter what it is that you type in.
50:53
If I say, all right, I want the width to be 300, but I want the height to be I don't know 700 pixels for instance.
50:58
And then I try refreshing this page, suddenly the cat doesn't look quite right anymore because I've
51:04
distorted the image by telling it exactly what dimensions to display it as. But the web browser will be smart if you give it the opportunity to be.
51:11
So if I just say, height is 700 pixels but leave off the width for example and just say render it as a 700 pixel tall cat it will render to 700 pixels
51:21
tall and adjust the width appropriately in order to match. So if you are going to specify both the height and width to something,
51:26
make sure the dimensions are what you want them to be otherwise oftentimes it's best just left up to the browser to make that determination for itself in terms of what makes the most sense.
51:36
So that's images and how we use HTML attributes to adjust the behavior of particular HTML tags.
51:42
Questions about that? Yes. Question over there. AUDIENCE: How would you make the image as a proportion [INAUDIBLE]
51:49
web browser [INAUDIBLE]? BRIAN YU: Fantastic questions. So the question is, how do we take this image and make it sort of proportional?
51:57
Because if I'm here looking at it on a computer with a sort of a wide screen then this looks great, but if for instance I
52:04
were to shrink down this page, now most of the cat gets cut off. And so HTML, and later we'll see CSS for styling,
52:12
has a number of different ways via which we can control exactly how tall or how wide things are and control the size of things.
52:19
One way is by specifically specifying a number of pixels. For instance, I might say that I want this cat to be 700 pixels tall,
52:28
but I might alternatively say, all right, you know what? I want the width of this cat to be 50%, 50% of the total width of my web page.
52:37
So if I save that and render it, what I see now is that I didn't tell my web browser here's how many pixels to render this image as, it just
52:44
knows 50% of whatever the width of the web page is, that's going to render as half of that. And now if I shrink the web page, before the cat didn't change size
52:53
because it was a fixed number of pixels and if I shrink the web page it doesn't really care, but now if I shrink the same web page
52:59
you'll notice that the cat shrinks with it. As my web browser gets narrower, 50% of that full width of the web browser
53:05
is getting smaller. And this is a trick that's often employed. Now, if you start to think about how to make your web pages responsive to people using mobile phones or tablets
53:13
or devices of different sizes, making sure that your content looks good both on a computer but also on smaller devices as well
53:19
is very, very important nowadays as web applications become more and more useful on varieties of different platforms.
53:25
And so techniques like that of using a percentage instead of a number of pixels to say I want this to only show up as 50%
53:31
can often be a helpful tool to make sure that you have that dynamism, that responsiveness in your website to make sure
53:37
that it's able to adapt accordingly. Great question, though. Other questions?
53:45
All right. We'll keep going. So that was images. We'll show you a couple of other things that HTML can do.
```
---
```
table.html
53:51
One thing that it's very useful for is rendering tables. So we will have tables of data with rows and columns
53:56
and we want to display that data to the user. Let's take a look at table.html, which will be an example of that.
54:05
So what we have here is a table that represents US presidents. Just the first two.
54:11
But what we'll notice here is that we have a table tag that begins the table. And then we have a whole bunch of tags nested within it.
54:18
We have a tr tag, which stands for table row. And then within that we have th tags, which stands for table headers.
54:27
So if you think about this just going one layer at a time, we start our table. And the first thing in our table is going to be a row in that table
54:34
where that row is going to consist of three headers or three columns that are being headed by these individual cells.
54:40
We have first name, last name, and years in office. And now we end that row with /tr.
54:46
That's the end of that row and now we start another row. Here's a table row that says, all right, here is going to be the start of a new row of this table.
54:53
We have George and then Washington and then the years of George Washington's time in office. And if we scroll down a little more we see
54:59
we have another row underneath that. Notice that inside of the row all of the individual cells
55:05
are stored in td elements, where td stands for table data. This is just the data that is contained within that particular row.
55:13
And so now if I were to open up table.html, what I see is something that looks something like this.
55:19
I see my title. Notice presidents was here labeled as a h1, so it's going to render as a large heading.
55:25
And within that I have individual rows. Here's my header row. The th ones make it render as sort of bold.
55:32
And I have the names and in the second row inside of that table as well.
55:37
Now, this might not look like a very fancy table. It doesn't have borders or a coloring or it doesn't look like it could be aesthetically pleasing.
55:44
We'll see later on in tonight's lecture how we might go about styling a web page like this in order to make it look a little bit nicer and look a little more aesthetically
55:51
pleasing. But that's an individual table. And if I wanted to, I could add an additional row to this.
55:56
Right here is two rows and I can just continue to add more elements inside of this HTML page.
56:02
So I can say one new table row and I'll end that table row. And inside of that is going to be table data Thomas Jefferson and 1801 to 1809.
56:17
And so if I refresh that page, we see that the third row in that table now appears because I've added to the HTML code.
56:24
And you can continually do this by adding more and more HTML elements to the contents of my HTML page.
```
---
```
form.html
56:31
One other HTML tag that we'll take a look at just to see how they work is form.html.
56:36
So what we're looking at here is an HTML4. Oftentimes, when we're working with applications
56:41
we don't just want to display information to the user, but we want to collect information from the user in order for them to either sign up for our website or log into our web site
56:50
or submit data to us in some other way. And so what we see here is a simple example of an HTML form, where
56:55
we have this form tag in the end of the form to say here is going to be a place where users can input data.
57:00
On line seven we have an input tag. Notice that like the image tag there is no end tag here.
57:07
This is just going to be a place where users can input text and we need to tell the web browser what type of information
57:14
the user is going to be inputting. In this case, we're saying the type of that information is just going to be text.
57:19
And we're specifying a couple of other optional attributes that give additional information to this form so that it knows how to behave.
57:25
Placeholder is just full name. Placeholder, if you'll recall, and we'll take a look at it in a moment, is sort of that same text that appears in a text field
57:32
before you start typing in it just to give the user a little bit of an indication as to what's expected of them as to what goes there.
57:38
And this name field at the very end just gives a name to this input field that says that this input field is
57:44
going to store the name of the person. This won't become relevant just yet, but as we'll see later on in this course
57:49
as we start to actually do things with the form, take this information and log it to a database or process it in some way,
57:55
being able to reference a particular input field by its name can ultimately be very, very helpful.
58:00
And then finally down here after they type in their name, let's give them a button to click on. That's created just by using a button tag.
58:06
And the name of this button is going to be Submit, and then /button to say, OK, that's the end of that button.
58:11
So if we render that form and take a look at what that looks like when we open it as HTML
58:17
we see it's going to look something like this. So we have a spot for the user to type in their full name. Notice that full name is automatically placed there as the placeholder text
58:25
that we put in or HTML, and they can type their name in there. And then the Submit button is a button that
58:30
would theoretically submit that form. Now, this form doesn't yet do anything because we haven't hooked it up. We haven't told the form what to do after someone clicks on the Submit
58:38
button, but we'll see later in this course how we can begin to using other programming languages like Python and JavaScript begin to take the results of form information
58:46
and do something useful with it. But for now all we're doing is designing the front end. What the user sees when they visit a particular web page.
58:54
So that was the form. Questions about the forms or tables or images or any of the other HTML elements or tags that we've seen thus far?
59:02
All right. One helpful way to think about HTML as we
```
---
```
DOM
59:09
think about designing our HTML websites is thinking about them like a tree structure. If you're unfamiliar with tree structures,
59:15
effectively think of them as a combination of nodes where nodes are just points within this tree that are connected to other nodes.
59:25
So in this case, if we look at a simple website like the Hello, World page that we created before, if we wanted to represent this as a tree in HTML
59:32
we typically call that tree the document object model. It might look something like this. We have HTML at the very top.
59:39
Everything in our web page is contained within this HTML tag. And within that HTML tag we have the header,
59:47
that head section of the HTML page, and we have the body of the HTML page because inside of HTML we have the head here and the body there.
59:55
Inside of the head we have a title because the whole title tag is nested within the HTML header.
1:00:01
And inside of that title is our text, hello. And likewise, inside of our body is just this text, hello, world.
1:00:06
And you can imagine for some of our more complicated pages that we saw earlier where we had tables, for instance, that we might have a table element inside of our tree
1:00:15
and which is connected to a whole bunch of tr's for table rows each of which itself is connected to a whole bunch of th's for table
1:00:22
headers, or td's for table data. And you can represent this entire HTML page as this big tree.
1:00:27
And it might not seem very intuitive as to why you might want to do that right off the bat, but as we'll soon see, especially as we start diving into JavaScript later
```
---
```
CSS
1:00:35
on in the course that by having an understanding of this tree can we start to manipulate it, can we start to add things to the tree
1:00:41
in order to add more to our web page, remove things if we want to take things away from the web page while the user is interacting with it.
1:00:47
And as we'll see in just a moment we can use this tree in understanding what's contained within what to begin to style our web pages.
1:00:54
And styling our web pages is going to be the process of taking what so far has just been websites that have a white background and black text on it
1:01:04
and maybe images and other things as well, and starting to add some of our own custom styles to it in order to make it look a little bit nicer to the user.
1:01:11
Because a big part of web development these days is not just making sure that the web site works and that it does what it's expected to do,
1:01:17
but also that it's visually appealing to the user. That it's something that they would want to interact with, that it looks nice, that it looks professional.
1:01:23
And so that is not something we can do with just HTML alone, but it's something that's going to come in with an additional tool called CSS,
1:01:31
or cascading style sheets which is a different language altogether and we can use to interact with HTML in order
1:01:37
to style the HTML in order to change the way the HTML looks according to rules that we set in order to add color to our web pages, for example,
1:01:45
or add spacing in places where we want spacing or add borders to things or add a background to things, for instance.
1:01:51
And so what we'll take a look at now is how we might be able to leverage some of the tools of CSS
1:01:56
in order to design a web page that looks just a little bit nicer than the web pages that we've already been working with.
1:02:03
So let's take a look at stylezero.html. And what we'll notice is that this web page is
style0.html
1:02:10
very similar to ones we've seen before. It's got a body, it's got an h1 as the headline,
1:02:15
it's also got these p elements where p just stands for paragraph, like a paragraph of text. But the key difference here is that we've added a new attribute.
1:02:23
We've added this style attribute here that's associated with h1, that headline. And that style attribute is equal to something a little bit complicated,
1:02:30
but let's break it down into parts. We have in quotation marks, "color:blue;text-align:center";
1:02:41
And so what we see here in this style attribute of our heading, R2 is CSS properties, where a CSS property is just some specific style
1:02:50
property that the browser is going to understand and render in a particular way. And as you might guess what's happening here
1:02:56
is we're saying that we want to assign the color property of this heading to blue and we want to assign the text align
1:03:03
property of this heading to center. And so what that's going to do is instead of just rendering an h1 as we
1:03:09
normally would as just a black big headline on the left side of the screen, we'll render it as a blue headline that's centered on the screen.
1:03:17
And so if we now open up stylezero.html, and we see a web page
1:03:22
that looks something like this. That big heading is still there at the top of the page, but it's a little bit different now.
1:03:27
We styled it to be blue, we styled it to be centered. Whereas before, if we were to just get rid of this style tag
1:03:32
altogether and say that this is what that looks like without any
1:03:38
of that additional styling. And so leveraging tools like that we can start to build up styles for our web page.
1:03:44
We can start to make things look the way we want it to. We can apply a color scheme to our website in order to put whatever themed colors we want to put on our site.
1:03:52
And this can be used in order to add the sort of styling. And HTML and CSS have a very rich vocabulary
1:03:59
for the types of things that can understand. Obviously, we can be simple colors. We can do the blue color or we can say red to make the headline render as red
1:04:07
instead, but there is something like 140 different colors that HTML and CSS know how to understand and interpret.
1:04:14
So I could do something like color:dark magenta, for instance. And if I refresh that page then the heading is rendered as dark magenta.
1:04:23
And if that's not enough color sophistication for you, the 140 different named colors out there,
1:04:29
you also have the ability to select exactly which color you might want by using that colors hex value.
1:04:34
And so in HTML and CSS and when we're dealing with color more generally,
1:04:40
we'll often represent color using a format called RGB, or red, green, blue where we specify how much red is in the color, how much green is in the color,
1:04:48
and how much blue is in the color. And using different combinations of red and green and blue, where zero means very little red and 255 means a whole lot of red.
1:04:58
And likewise for green and blue can we represent basically any color that we want to. And so if we type in HTML color picker, for instance,
1:05:08
and we can see over here that this color, this shade of blue is 66 amount of red.
1:05:15
So a moderate amount of red and a little more green, 134 green and 244 blue.
1:05:22
So a whole lot of blue. And that is this particular color. And so if we wanted to make our headings some different color, for instance,
1:05:29
maybe we want it green and we want it to be a darker green like this color,
1:05:34
for instance, that's this color. That's 12 red, 142 green, and five blue.
1:05:40
And that color is represented by this up here. This is called a hex code. If you're familiar with hexadecimal or base 16,
1:05:48
it's effectively these three numbers 12, 142, and five represented in base 16. No need to actually understand where that number comes from,
1:05:56
but effectively know that the first two of these numbers and letters represent the amount of red, the second to represent the amount of green,
1:06:03
and the last represent the amount of blue. And if I take that now 0c8e05, and in my HTML code rather than dark magenta,
1:06:14
I say #0c8e05, for instance, that same color hex
1:06:20
code that I saw before and then refresh my page, now it's going to render using that exact same green.
1:06:25
So by using hex codes and understanding RGB values, we can have a lot more control over the colors
1:06:31
that our web page uses by specifying exactly which color that we want to display when that page ultimately gets rendered.
1:06:38
So that's the basic introduction to how we might use the style attribute to begin to add some styling to our web pages
1:06:43
and make them look just a little bit nicer. Questions about that so far, CSS or colors or anything we've looked at?
1:06:50
As we can imagine, if we start to-- and I'll
1:06:57
change this back to blue just for good measure. If we start to add a lot of styling to our HTML web pages,
1:07:03
this is going to start to get cluttered pretty fast. I can start to add additional styling here. If I want my paragraph here to be purple and I want this paragraph over here
1:07:12
to be red, for instance. And this will certainly work. I can style things in different colors and that's going to work just fine,
1:07:18
but I've mixed my CSS code of describing what color and how I want things styled with the actual contents of my page,
1:07:26
of the actual content that I want to be displayed when the user goes to the page. And oftentimes, that can be seen as just a little bit messy.
1:07:32
We might look for a cleaner and more elegant way of styling our page. And CSS offers a number of different ways via which we can do that.
style1.html
1:07:40
So one way is seen here in styleone.html. So notice in styleone.html, which ultimately
1:07:48
when we open it is going to render exactly the same way. Big blue headline and then two paragraphs of black text.
1:07:54
We've done something a little bit different here. What we've done is the body of the web page
1:08:00
is the same as it was before without any style tag attached to it. The h1 no longer has a style attribute.
1:08:05
It just says h1m welcome to my web page. What we've added is we've added an extra section to the header of the web page.
1:08:12
We've added the style element to the header to say here is some style information for the web page should
1:08:18
know that should be included in the entire web page, the rules to follow when deciding how to style and how different parts of the web page
1:08:25
should appear. And what we see here on line six is that inside the styling of the web page we have h1, meaning here is how you should style any h1 that you see.
1:08:34
We say h1, the color is going to be blue and the text align property is going to be centered.
1:08:39
And that's why ultimately that page looks exactly the same because effectively the browser is doing the same things.
1:08:45
We've just moved the CSS styling away from the body of the HTML content to the web page.
1:08:51
And this is a paradigm you'll start to see a lot as we begin to approach web development from a number of different angles that whenever we're intermingling
1:08:58
a lot of different things, oftentimes it can be helpful to take one part of the web page and separate it out into a different place such
1:09:05
that it's more logical or more easy to understand or more readable or ultimately more elegant. And this is one example of that of taking the h1 out of the h1
1:09:13
from the body and just describing it in the header of the web page in terms of how the entire page should be styled.
1:09:19
And one other note about this is that when we put the h1 in the style tag in the header, it's going to apply to every h1
1:09:25
that it sees throughout the page. So if I add another header, adding here is a second headline,
1:09:33
and that's also an h1 because up here in our style tag we've told every h1 to render as blue colored
1:09:39
and centered in terms of its alignment of the text. When we refresh this page the second headline is also going to show up as centered and blue as well.
1:09:46
Whereas before in that first example, if we were to add an h1 and we wanted it to be styled the same way, we would have needed to go ahead,
1:09:56
and h1 style equals color blue text align center and repeat that same thing
1:10:02
again for the second one. And generally speaking, whenever you find yourself repeating the same code,
1:10:07
or even copy pasting the same styling code again, in order to make it to apply to something else, generally speaking you
1:10:12
should look for a better designed or a more elegant way of doing the same thing because ultimately this repetitiveness gets
1:10:19
difficult to maintain. If I want to change the headlines from blue to red, for instance,
1:10:24
I now need to change the headline in two different places in my web page. Whereas, in styleone.html, where I have all the styling
1:10:32
contained inside of just this style element, inside of the header of my web page. If I wanted to change both of my headings to red instead of blue
1:10:40
I just need to change it in one place, changing color from color blue to color red. And now both of the headings change in their color
1:10:47
because that Heading Style is applied to the entire document as the whole. Questions about that?
1:10:54
OK. But we can in fact get even better at how we go about trying to separate out the CSS
1:11:00
because natural questions that might come up now are number one, we still have this styling code inside of the HTML file,
1:11:07
when it sort of feels like something separate. The way that we style our website is sort of fundamentally different from the actual content
1:11:14
of the text that goes on our website and the structure of our web page in general. But another issue that might come up is, what
1:11:20
if I start to build larger web applications that don't just have one HTML file, that have two, three, four, or more HTML files
1:11:26
that all want to have red headlines that are all centered. Of course, I could take the style tag and I
1:11:32
could copy paste it across all of my different HTML files, but again, that brings up the same problems that we saw before.
1:11:37
The problem of whenever you find yourself copy and pasting code and repeating code we run the risk of making it more difficult to maintain
1:11:43
and ultimately making it less elegant. If we wanted to change the color down the line it becomes a whole lot harder because we have
1:11:49
to change it in many different places. So what can we do about that? Well, we can take that CSS code and just separate it into a different file
style2.html
1:11:56
altogether. So what I'll show you now is styletwo.html. Styletwo.html does the exact same thing as styleone.html.
1:12:05
And all the source code will be made available to you afterwards as well. Styletwo.html shows you a big blue centered headline,
1:12:13
but how is it doing that? Well, the body is still the same and we no longer have a style tag in the head,
1:12:19
but what we do have is this line here, line five. Link rail equals style sheet href=styles.css.
1:12:28
So what's going on here? This link tag is effectively telling us we want to link in some other file that's going to provide us information to help
1:12:35
us know how to render this HTML page. And what kind of information are we trying to render?
1:12:41
Well, it's going to be a style sheet. Information about how to style our web page. And which file are we going to include?
1:12:47
Which is the file that we want to link? Well, it's styles.css. And so now if we take a look at styles.css,
1:12:54
what's going on in there to allow it to render the CSS the way that we want it to? Let's open up styles.css.
1:13:01
It's exactly the same thing as the contents that we saw in the style tag of our HTML header before.
1:13:07
It's just h1, color is blue, text align is center. And that's what allows us to get this.
1:13:14
If we add additional properties, maybe I want my paragraphs to all be red, for instance, and I save that, now if I refresh of the page
1:13:23
the paragraphs are red. The HTML file didn't change at all. Styletwo.html stayed the same.
1:13:29
Yet, when I refreshed it the styles changed because this linked file, this linked CSS file that is defining the style for my styletwo.html file
1:13:38
has been updated to say, now I want all of the paragraphs to show up with red coloring instead of the original black.
1:13:45
And so we saw three different ways via which we can link CSS into the contents of our HTML code.
1:13:51
One, just by including that style attribute directly in the HTML. The second way, factoring it out into the header of the HTML
1:13:58
page so that it applies to the entire page. And then finally, what might be one of the most common paradigms
1:14:04
you'll use, especially if you start building larger web applications is this method of saying, take the CSS, separate out into a different file such
1:14:12
that even if I have many different HTML files they can all reference the same CSS file so that they all
1:14:17
get styled the way that I want the page to be styled. So those are the basics of how we might go about using CSS.
1:14:25
Now let's take a look at a couple of the common CSS properties that we might use. So far we've seen color to give a particular element of color in HTML,
1:14:34
and we've seen text align to say I want to center this text instead of left justifying it.
1:14:39
And we can also use CSS to change the size of different elements as well.
size.html
1:14:45
So let's take a look at size.html. And for good measure I've just included the CSS in the header like we saw in the second example before.
1:14:52
Though in practice in a larger application you might want to move this information into a different file.
1:14:58
But what you see here is inside the body I have a div. And a div just basically means a division of my code.
1:15:05
Some section of my code that doesn't really have any real formal meaning. It's just a section of my code that I want to do something with,
1:15:12
maybe style in a particular way. And here's a style I've applied to it.
1:15:17
Background color is going to be teal, width is going to be 100 pixels, height is going to be 400 pixels.
1:15:25
So if I now go to size.html, this is how it gets rendered.
1:15:31
We have a vertical just block of HTML content that says hello, world.
1:15:37
But in particular its background color is teal, it's got a particular width and it's got a particular height as defined
1:15:43
by what I included inside of my style tag just a moment to go.
1:15:48
And so using these width and height tags we can start to really define exactly what our website looks like.
1:15:54
If we change the width to 500 pixels instead of 100 and refresh the page there, we see that now it's a fair bit wider.
1:16:01
And so we can control exactly how the web page shows up just by making these small modifications to it.
1:16:07
But now what if we wanted to add a little more to this website in terms of its design, in terms of the spacing of this page,
1:16:13
in terms of thinking about what it's going to look like? You notice that right now this hello, world block is very close to the upper left hand corner of the screen.
1:16:21
Maybe we would want to move it around a little bit more. So that's where we can start to introduce the notion of a margin
1:16:29
around the edge of a particular HTML element. So for instance, if I go in here and set the margin of the div
1:16:37
to be 30 pixels, for instance, and now refresh that page,
1:16:42
now we see that hello, world has a margin around it. It's got this sort of 30 pixel invisible border that's surrounding it.
1:16:48
And it helps to space that out from different elements. And so controlling margin can often be helpful when you're trying to lay out a web page with a bunch of different elements
1:16:55
and you want to control how far apart different elements are from each other. The margin is very helpful there.
1:17:01
Another thing you might notice is that hello, world right now is very much just directly at the edge of this teal box, which
1:17:08
looks a little bit suboptimal. Maybe I would want to change that a little more. And for that I can add in another CSS property called padding.
1:17:15
So I can say, all right, let's add a padding of maybe 20 pixels.
1:17:20
And after I refresh that, now you'll notice that hello, world is internally padded by sort of an invisible border of 20 pixels.
1:17:28
And so margin and padding are both used in order to control spacing. But the key difference is that the margin of an element
1:17:35
is the space around this outside of the border of the element. So this is my div, this teal box.
1:17:40
The margin is what's outside of it. I've got 30 pixels of space along that side and the padding is between the content of the element and that elements
1:17:49
border. So this right here is 20 pixels worth of padding for the hello, world that's located inside of this div.
1:17:56
And so using margin and padding, especially on larger web applications you can start to really control the look and feel of the website
1:18:03
in order to make it display exactly the way that you would want it to. All right. Thus far we've also only been interacting with our HTML page
font.html
1:18:11
in the sense of having text that is all of the same font. It's sort have been the same default font
1:18:16
that HTML tends to use whenever a web browser is displaying HTML content. And maybe we'd like to have a little more control over that.
1:18:24
So let's open up font.html, and take a look at what's going on there.
1:18:31
So again, we have a body inside of which is a div that says hello, world. And inside of the style tag up here we've
1:18:38
added some special styling to that particular div. In particular, we've added three things.
1:18:43
We've added a font family that effectively just says this is the font that I want this div to render in.
1:18:49
And notice that I haven't just said give it one font. I said Arial, but I said Arial, sans serif.
1:18:55
Reason for this is when we start to think about making sure that our website looks right in matter what browser it's
1:19:01
loaded on. So maybe you were wanting to even include some font on your web page that the user's computer doesn't have, or that the user's web browser just
1:19:08
doesn't understand. And so if you include multiple thongs as the font family
1:19:13
in the styling of our HTML, then what's ultimately going to happen there is-- sorry. There's an extra tag there.
1:19:19
What's ultimately going to happen is that the web browser will first try and match the first font that I provide.
1:19:24
It will try and use the font Arial if at all possible. But if it doesn't have the font Arial, if the web browser doesn't
1:19:30
know what Arial is or can't find that font, it's just going to default to any sans serif font.
1:19:35
And so oftentimes if you want to use fancier fonts on a web page it can be a good idea to include the font that you want,
1:19:44
but after that some additional more common fonts that might be more common in other browsers on older browsers in particular that way you
1:19:51
can guarantee, or at least know with high probability that when a user looks at your page they're
1:19:56
seeing what it is that you actually want them to be looking at. In addition to the font family, we've additionally
1:20:02
specified the font size for how big we want the font to show up as. In this case, 28 pixels tall.
1:20:07
And finally, a font weight. You want the fun to be bold, for instance. So now if we open up font.html, we see that what we get
1:20:16
is slightly different text rendering that what we saw before. We see hello, world, but it's no longer in that same font
1:20:21
that it was previously. It's now 28 point font in size, it's now in a particular font,
1:20:26
it's now bold because we were able to control the font that was present there.
border.html
1:20:32
Couple other CSS things that we'll just take a look out before we move on. We'll take a look at border.html So again, we have inside of the body
1:20:42
a div that says hello, world. Just [INAUDIBLE] saying hello, world in some rectangular box. But in the past that rectangular box has sort of been invisible.
1:20:49
We've seen the words hello, world, but there hasn't been like in a physical box drawn around it. But now there can be.
1:20:54
Up in the style tag we're going to specify that we want inside of the div
1:21:00
for there to be a border and that border to be a three pixel, solid blue line.
1:21:05
And so by specifying border three, pixel, solid blue we can open up border.html and now we see
1:21:12
hello, world inside of this rectangular box that is a three pixel blue line. And we can change this, can customize it however you like.
1:21:19
It can be a five pixel, dotted red line, for instance.
1:21:25
And now it's going to look something like that. So we have full control over what the border looks like. And again, there are many, many CSS properties.
1:21:31
Far more than we're going to be able to look at in just tonight's lecture, but I'm giving you a taste of them, just a teaser
1:21:36
of what CSS properties are out there so that as you start designing your own web applications you can think about what do you want the web page to look
1:21:43
like, you can get a feel for what CSS is capable of. And as a result, you can start to design pages that look
1:21:49
the way that you want them to look. So that's borders. And now let's try and use some of the CSS that we've learned in order
Styling table.html
1:21:58
to improve the style of one of the HTML pages that we've already looked at. So let's take a look at table.html.
1:22:06
And recall that table.html was just a simple web page that listed presidents of the United States.
1:22:12
We have Washington, Adams, Jefferson. And right now this table doesn't look particularly fancy or particularly
1:22:18
great, but we can use CSS now to begin to add styling to it, to begin to control the way this looks to make it look the way we want it to.
1:22:26
Maybe, for instance, we want a border around this table. So up in the head I can add a style tag and say, all right,
1:22:35
around the table lets add a border and let's make it two pixels solid black.
1:22:42
And now around our whole table we just have this box, a two pixel solid black line that's
1:22:48
surrounding the entirety of this table. So that's good. That's a good start, but it's not great.
1:22:54
I also would probably want for there to be borders around individual cells for this table. Lines that are dividing up the rows and the columns.
1:23:00
And so let's do that now. So now I would want to apply styling to the table headers.
1:23:07
Let's apply a border of maybe one pixel, solid black this time and also around the table data.
1:23:14
One pixel, solid black. Recall that the headers were these things at the top the first name,
1:23:19
last name, years in office. Whereas the data, the td were the individual cells that were composed within that table.
1:23:26
And by specifying this now and I refresh of the page, now the individual cells also have a border around them.
1:23:32
We see a little box around each one of these individual cells. And one thing you may have noticed is that the styling for the table header
1:23:39
is the same as the styling for the table data. They're both border, one pixel solid block. And it felt a little bit repetitive for me to have
1:23:46
to say the same thing two times. So what I can do instead is just say th,td, to mean take this styling,
1:23:53
apply it to both table headers and table data and then I don't need this additional information for the CSS.
1:24:00
I just say the table is going to have a two pixel, solid block border. The table header and the table data will each have a one pixel solid back
1:24:07
border. And if I refresh that the same exact layout results. I don't see any changes in the styling because this is fundamentally
1:24:13
the same meaning as before. We've just managed to eliminate some of that redundancy. What else might we want to do here?
1:24:20
Well, right now one thing that you may notice is that the lines are repeated twice because we
1:24:25
have a box around each one of our individual cells we see two lines between each individual cell instead of one.
1:24:33
And so CSS found a way to get around this just an additional property that you wouldn't know about unless you looked it up or had used it previously.
1:24:39
But [INAUDIBLE] additional CSS property called border collapse. And if I had border collapse collapse to this styling of this HTML page
1:24:48
and then refresh it, now we see that those double borders go away. We just have just the borders we want.
1:24:54
And if we didn't know that border collapse exist as a CSS tag it would be very easy to look up. You could just Google CSS property for removing double borders in a table.
1:25:04
And you'll likely find someone online who has said, use border collapse:collapse and you can then use those CSS properties
1:25:10
in your own web design as well. Now we might want to add some color to this as well.
1:25:16
You might want the headings of our table to be in a slightly different color. So I might say for the table headers, let's
1:25:23
say we want the background color to be light gray, for instance.
1:25:28
And we refresh that and now the background for our table headers is light gray. And maybe you want to add some spacing.
1:25:34
Recall that there are two ways that we've added spacing thus far in this course where margins are around the outside of the box
1:25:39
and paddings on the inside of the box. Right now I get the feeling that these cells are a little bit cramped, that there's not a whole lot of space inside those boxes.
1:25:47
So maybe I want to add more space there. So maybe for each of my table header cells and table data cells,
1:25:53
I want to say padding five pixels, just to add five pixels of padding on the inside of my individual cells.
1:26:00
And now it looks something like this. Looks a little bit cleaner, a little more room for the cells to breathe because I've added some padding in there
1:26:07
just by adding these additional CSS properties. I can additionally add changes to the size of this.
1:26:14
Maybe I want the table to be wider. I can say make the with 500 pixels, for instance, and now it's 500 pixels wide.
1:26:22
But as someone mentioned earlier before, this might not be great because now if I shrink down this page
1:26:27
now I've sort of lost information. I can scroll over to the other side, but the table doesn't respond with me.
1:26:33
So I can instead say something like, what width? Let's make it 50%. So the width of the table takes up 50% of the view
1:26:41
of the entire width of the window. And now as I shrink it down or make it larger you'll notice that my web browser knows automatically
1:26:47
we need to add new lines to the table headers in order to make room for all the data. The web browser takes care of all of that.
1:26:53
I just need to tell it, here's how I want the data to render, here are the specific style properties that I want to add to the HTML page.
1:26:59
And the result is this. And finally, one thing I might want to do is say, for all the table data let's align it centered.
1:27:09
And what we see now is we have a table that looks a whole lot nicer than the table we had just a couple of moments ago
1:27:15
when we didn't have any of the CSS at all and it was just all the tech sort of on one side without any borders
1:27:20
or centering or styling added to that. So using just a couple lines of CSS, we can
1:27:27
start to take the contents of our pages and make them a whole lot more responsive.
1:27:32
A couple final points to take a look at. Any questions about this so far before we move on though? Yeah. AUDIENCE: [INAUDIBLE]
1:27:38
BRIAN YU: Yep. AUDIENCE: [INAUDIBLE]
1:28:03
BRIAN YU: Great question. So the question is, there are so many properties out there. I've shown you a whole bunch today, but there are far more that I haven't even managed to touch on
1:28:10
just because we don't have enough time. How do you know which one to use to make a certain thing happen? Oftentimes, the best way to do this is to look for documentation online.
1:28:19
If you look up CSS property documentation you'll often find lists that just show you all of the different CSS properties
1:28:25
that you can apply to style a particular element on the page. And you can use those. Or likewise, if you're looking for something very specific,
1:28:32
you want to know how do you get something to happen? Maybe I didn't know about collapsing those borders before,
1:28:39
I can just perform a Google search and look for CSS table,
1:28:45
combine borders of cells. I don't quite know what I'm looking for, but I know approximately what I'm asking for.
1:28:50
And if I look around carefully enough I'll notice that in the very first result it tells me I can use that border collapse:collapse property in order
1:28:58
to make that happen. So even if I didn't know how to do that particular thing or didn't know how to do some other particular styling,
1:29:04
this is all readily available information that you can look up because others have likely walked that trail before,
1:29:09
tried to solve the same problems and are likely have a way to use CSS in order to make the styling look the way that you want it to ultimately look.
1:29:17
So great question. OK. One more example just to quickly show you.
div_span.html
1:29:24
What we have here are divs and spans. So we've seen divs before in a little bit of detail, where the div is just
1:29:32
a division of my web page. That's just going to be some section of the web page, some vertical section
1:29:37
of my web page. And a span as we see here, is really just the section of my web page that might be in the middle of some text.
1:29:44
They don't really have the same kind of meaning the way that an image tag is an image and a list tag creates a list and a table tag creates a table.
1:29:51
The divs and span tags really don't do anything at all, but they allow us to label different parts of our page.
1:29:57
I can say div and then give this an id, where an id is just an attribute that uniquely identifies a section of my web page via a name
1:30:04
that I give it. So I can say div id equals top, where top is just a name that I picked to say, you know what, this is going
1:30:10
to be the top section of my web page. And I'm going to put it in a div just so that I can name it, so that I can name it top to mean this is the top of my web page.
1:30:18
And likewise here, div equals middle. I picked the name middle as the name for this section of the web page.
1:30:24
And then div id bottom just means I have a section here and I'm naming it bottom. And I can give it a name by using this id attribute.
1:30:32
Then these spans here. Why am I using those? Well, I have this additional attribute called class.
1:30:38
Class is an attribute that lets me give names to elements as well, but it lets me give names to a certain type of element.
1:30:45
So with id's. When I have an id on an HTML element that id needs to be unique. There can only be one HTML element in my web page that has an id of top,
1:30:54
only one that has an id of middle, and only one that has an id of bottom. But I can give many things, as many as I want the same class.
1:31:01
And so here I'm saying, I'm going to call this class name. And that way if I want to I can refer to all
1:31:08
of the different spans who have classes name and style them in a particular way. And you'll see what I mean by this in just a moment if it's confusing.
1:31:16
But right now we have three divs. This is the top of my web page, this is the middle, this is the bottom. Where top, middle, and bottom are inside of these spans
1:31:24
who have a class value of name. So what can we do with that? Why are we labeling things with top, middle, bottom name?
1:31:31
Well, if we take a look at the styling up here, this is the contents of our style tag.
1:31:37
We have this pound sign. And the pound sign in CSS is short for id. What this is here saying is get me the thing whose id is top
1:31:46
and style it in a particular way. In this case, style it with a font size of 36 points.
1:31:51
Here, take the thing that has id of middle and style it with a font size of 24 points. And likewise, take the thing that has id bottom and style
1:31:58
it with a font size of 12 points. And before I wouldn't have had a way to distinguish the styling between three
1:32:04
different divs, because if I had said div style that is 24 point text it would have applied to all three of my divs,
1:32:11
but if I only want it to apply to one of them an easy way to do that is to uniquely identify it. This is the top div and then say, OK, get the thing whose id is top,
1:32:19
here's how I want you to style that thing. Likewise down here, if the pound sign means id the dot sign in CSS
1:32:28
means class. So dot name means take anything whose class is name and style
1:32:34
it in this particular way. In this case, make the font weight bold. So now if I open up divspend.html, this is the contents that I see.
1:32:47
I had three divs and you can sort of see them here even though they're not laid out. This was my top, this was my middle, this was my bottom.
1:32:53
And because I said get the thing with id top and make it the biggest in font size, make the middle one somewhere in between, and the bottom of the web page
1:33:00
the smallest font size at just 12 points, then they were able to render using the correct fonts even though that they're all div tags.
1:33:06
And these names, top, middle, and bottom, they're all bolded because they were inside of spans that had a class of name.
1:33:13
And I said take all of the things that have a class of name and style them with a font weight of bold.
1:33:19
Take a look at that one more time in case it was confusing now that you've seen what this web page actually looks like.
1:33:25
Inside the body we have these three divs. And these id's never show up in the contents of the HTML.
1:33:31
These names are only present inside the HTML code and not when it gets rendered in the browser.
1:33:36
But I'm giving the divs these names such that later on in my style tags I can go in and style them however I want them to,
1:33:44
by giving them a particular font size, for example, in order to result in them rendering the way that I want them to be rendered.
1:33:51
And likewise, the same for when we have individual names. So that's a brief introduction to CSS.
1:33:57
Next week we'll dive in even further into HTML and CSS. But any questions about the CSS that we've
1:34:03
seen so far in terms of how to go about styling our web pages?
1:34:08
Yes. AUDIENCE: [INAUDIBLE] question. A number of the things that you did in the HTML code
1:34:15
you could do in a Wysiwyg editor where you can see what you're doing more readily.
1:34:22
And then Microsoft Word generates HTML code for you, right?
1:34:29
BRIAN YU: Great question. AUDIENCE: Under what circumstances do you want-- in practice, how are people
1:34:35
really generating their HTML code? And under what circumstances do you want to be down in the weeds
1:34:40
writing in HTML? BRIAN YU: Fantastic question. So the question was, nowadays there are all these Wysiwyg editors where
1:34:47
I can just click a bold button and make text bold or click a color box and change the color to whatever I want without needing to know hex values
1:34:54
and class names and id's and all that, so why would I ever want to actually use this stuff, or in what situations would
1:35:00
this actually come up? And the answer is that oftentimes a lot of the basics will already be done for you.
1:35:05
Next week we'll start to dive into a CSS framework called bootstrap where a lot of the CSS to make web sites look nice is already written for you
1:35:13
and you can just use it and make your website look a little bit better. But you'll want to use HTML and CSS when it's
1:35:20
helpful for making very specific adjustments to your web page in order to make them look a particular way.
1:35:25
And also, once we start dealing with dynamic web pages. So far all of the web pages we've created
1:35:31
just show whatever content I want them to show. I type in the text that I want to appear on the page and I open up the page
1:35:36
and it shows that text, but most modern websites aren't like that. I open up Facebook or Twitter and it's not like some Facebook or Twitter
1:35:43
engineer has written all of the posts and tweets I'm going to see in an HTML page and shows that to me. It's that some server somewhere is figuring out what tweets
1:35:51
and what Facebook post to show me. It's generating HTML and CSS and it's displaying that information to me.
1:35:58
And that process of generating custom, dynamic HTML that gets displayed to the user based on different things
1:36:03
is something we'll explore later in the course. But it's a situation in which we'll really need to start to leverage some of the tools in HTML and CSS
1:36:10
in order to control when we're dynamically creating content. How does that content look?
1:36:15
And those are situations in which we might want to have a little more formal control over the CSS and the HTML
1:36:22
that we use inside of the page. But great question. Other things?
1:36:28
Yeah. AUDIENCE: I just want to know the difference between id and class.
1:36:33
For example, can I use the id attribute with span tag?
1:36:39
BRIAN YU: Great question. So the question is, when you use id in class can you use the id with a span tag instead of a div?
1:36:45
Yes, absolutely. You can use id's in class attributes on any HTML element. So I could have put a class on the div.
1:36:52
I could have put an id on the span. id and class are just two different ways of identifying HTML elements in a style
1:37:00
sheet, for instance, or using JavaScript as we'll soon see later. The only difference is that an id must be unique.
1:37:06
So there can only be one HTML element called top, only one called middle, and only one called bottom, but there can be as many things
1:37:13
as I want that have a class of a name, for example. And so generally speaking, if you want to style one thing
1:37:20
in just one part of the web page you use an id, but if you want to style a bunch of different things you'll use a class.
1:37:26
So if we think back to Twitter, for example, maybe your profile picture that shows up in the upper right hand corner of the screen, maybe there's an id
1:37:33
attached to that that's like profile picture because I only have one and I want to style it a particular way. But for tweets that are showing up in my tweet feed on Twitter,
1:37:41
those might have a class because there are a whole bunch. Dozens and dozens of different tweets that are all one style
1:37:46
basically the same way. And so by giving them a class and say, you know what, style anything that has a class of tweet using these rules,
1:37:53
then anything that is a tweet will be styled in that same manner. AUDIENCE: So the id and class actually cannot be used in the same,
1:38:02
for example, div [INAUDIBLE]? BRIAN YU: The question is, can id's and classes be used in the same element? Yes, they absolutely can be.
1:38:08
If I wanted to, I could put class equals name up in this top div, for instance.
1:38:14
And what that would do is because it has a class of name, when I refresh this, this whole top div is now bold
1:38:20
because if we just follow the rules that I gave it, I told my website, anything that has a class of name make its font weight bold.
1:38:28
And then down here I said this div has a class of name, so the entire thing is going to render as bold.
1:38:34
So you can give anything the class of name that you want. Not just the spans, although in this example, we only gave it to the spans.
1:38:40
Great question though. AUDIENCE: Question. BRIAN YU: Yes. Question? AUDIENCE: What happens if there are conflicting
1:38:46
sizes of same element [INAUDIBLE]?
1:38:53
BRIAN YU: Great question. Question is, what happens if there are conflicts, in terms of what happens?
1:38:59
And ultimately, we have to resolve those conflicts somehow by picking one or the other. And generally speaking, CSS will default to picking the more specific thing.
1:39:07
So if I said I want the top to render with a color of red
1:39:13
and I want the name to render with a color of blue, for instance,
1:39:18
technically because the top is supposed to render as red this whole text would theoretically render as red.
1:39:25
But because I said name renders as blue, then when I refresh this,
1:39:30
even though top is still inside of that text that should all be red because the name is more local to it, because it's part of that span that's
1:39:38
deeper within the tree that [INAUDIBLE] that we saw before than the div is then top is going to show up as blue instead of red.
1:39:46
Great questions. All right. So we've seen a little bit of HTML and CSS, but thus far our web sites have only ever existed sort of locally
GitHub Pages
1:39:55
on our own computers. I've been opening up these web pages in Chrome just by going to a particular file on my computer.
1:40:01
And you can certainly do that on your own computer as well just by opening up HTML files and seeing how a web browser renders them.
1:40:07
But ultimately, that's not very useful if I want to take my web page and deploy it to the internet, for instance, for anyone
1:40:12
to be able to look at. So how may I go about doing that? To use that there are a number of different ways to deploy web pages to the internet, but one common way, or one way
1:40:23
that we can use in this class using only the stuff we know so far is something called GitHub Pages.
1:40:28
And GitHub Pages is a feature of GitHub which effectively lets you take a GitHub repository and deploy it to the internet
1:40:34
so that people online can look at the HTML contents of that web page. And so let's try an example of that right now.
1:40:41
If I go back to this GitHub repository that we saw way back at the beginning of lecture this is the lecture zero repository
1:40:47
that inside of it has a hello.html page, that's got hello, world, hello, again, hello, hello, hello.
1:40:54
I would like to deploy that to the internet. And the easiest way to do this from GitHub is using GitHub Pages by doing the following.
1:40:59
On the right hand side I'll go to Settings, I'll scroll down to GitHub Pages.
1:41:05
GitHub Pages is designed to host your personal organization or project pages from a GitHub repository.
1:41:10
And I'm going to tell GitHub Pages, you know what, deploy to the internet from my master branch.
1:41:16
The master branch is just the default branch that we've used on our GitHub repository. We haven't yet gone into creating multiple branches,
1:41:23
but we'll get to that soon. But I'll go ahead and click Save here. And what that's going to do is enable GitHub Pages
1:41:29
on this particular repository and deploy this code to the internet so that anyone online could theoretically
1:41:35
go and see the hello.html file that I created before. So if I scroll down to GitHub Pages, it says your site is now
1:41:44
published at this link. So if I go to this link and go to this link, /hello.html, it's student 50,
1:41:52
my GitHub username. github.io slash the name of the repository, in this case, lecture zero /hello.html.
1:41:59
It can sometimes take some time, but this time it's already done. What you see now is a URL that you can go to right now if you'd like.
1:42:05
You can go to student50.github.io/ lecturezero/hello.html, and what you will see is a web page with the title of my web page and you'll see
1:42:14
the contents of hello, world, hello, again, hello, hello, hello. And that is now deployed to the internet.
1:42:20
We've deployed our first website to the internet all just using GitHub Pages. And the beauty of this is now if ever we make changes
1:42:27
to this repository to the way that it works or update the code by making pushes to it,
1:42:32
we will automatically update GitHub Pages. It will reflect the latest version of those changes. So we can add CSS to these web pages, we can add new content to the HTML,
1:42:41
we can add different HTML files, and it will all deploy to a URL that anyone on the internet can then visit.
1:42:48
And so that's GitHub Pages. And that's something that we'll begin to explore in project zero. Project zero, which will be released later today
1:42:54
is going to be an opportunity for you to start using the stuff that we've talked about today. HTML and CSS and Git in order to create a web page of your own
1:43:02
on a topic of your choosing and then deploy that to the internet for anyone to see ultimately using GitHub Pages by combining all of these tools.
1:43:10
Questions about GitHub Pages or HTML or CSS or things we've seen? AUDIENCE: Does GitHub Pages render the CSS and JavaScript, for example,
1:43:19
if you go visit the HTML page? BRIAN YU: Great question. So the question is, will GitHub Pages render a CSS and JavaScript
1:43:26
once we get there? Yes, GitHub Pages will allow us to do CSS and JavaScript, though it's not going to do everything for us.
1:43:31
We'll soon find ourselves within a couple of weeks finding that there are things we want to do with our websites that GitHub Pages just isn't quite powerful enough to do.
1:43:38
And then we'll want to transition using other tools. And that's what we'll stuck getting into Flask and other web development
1:43:44
services that will allow us to build more dynamic, more interactive websites that are a little more powerful than just web pages that
1:43:51
display the contents of what we've already shown. But next week we'll dive a little more into Git and HTML
1:43:56
and CSS doing some more advanced things with figuring out how to dynamically generate styling for our web sites
1:44:02
and going into some of the more advanced features of HTML5. But for now, that's it for web programming with Python and JavaScript.
1:44:08
Thank you all so much and we'll stick around a bit for questions.