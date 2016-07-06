## Development

`npm install`

`grunt`

===========================================================================

##Updating Staff Picks

- Open [staff_picks.html](https://github.com/mmmanyfold/picture-room-theme/blob/master/staff_picks.html)

- Anything inside of <!--  --> is a comment. Comments are ignored by the browser (for humans only). They don't affect the webpage.

- Each person’s section is marked with a comment (look for their name):
	```
	<!-- ## EDIT SANDEEP'S PICKS BELOW -->
	```
- Their picks are organized within rows and columns, which are also marked:
	```
	<!-- ## ROW 1 -->

		<!-- ## ROW 1, COLUMN 1 -->
		<!-- ## ROW 1, COLUMN 2 -->

	<!-- ## ROW 2 -->

		<!-- ## ROW 2, COLUMN 1 -->
		<!-- ## ROW 2, COLUMN 2 -->
	```
- Each item contains the following:
	```
	<!-- ## EDIT PRODUCT URL -->

	<!-- ## EDIT PRODUCT IMAGE URL -->

	<!-- ## EDIT PRODUCT URL, ARTIST NAME, AND PRODUCT NAME -->
	```
- Click the pencil icon to start editing. Edit the code as needed here on Github, so we always have a backup of the most recent version.

- When you're done editing, scroll to the bottom of the page and enter a descriptive commit message (ie. *update Milah's picks*). Then commit changes.

- Copy-paste the complete updated code into Lightspeed:

	1. Log in to: http://pictureroom.mcnallyjacksonstore.com/store/admin/login

	2. Go to **Custom Pages > Staff Picks**

	3. Click the **< >** icon under **Edit Page Content** to switch to HTML view

	4. Replace everything with updated code and click **Save**.

- Check the [Staff Picks page](http://pictureroom.mcnallyjacksonstore.com/store/staff-picks) to make sure everything looks right. Edit again if necessary – make sure to include a commit message (ie. *fix typo*)

===========================================================================

##Updating Featured Artist

- First upload the new featured artist poster via FTP (Cyberduck).

- Open [featured_artist.html](https://github.com/mmmanyfold/picture-room-theme/blob/master/featured_artist.html)

- Click the pencil icon to start editing. Edit the code here on Github, so we always have a backup of the most recent version.

- On line 2, replace the color name that appears at the end of `class` (hyphenate if more than one word) and the artist name (also hyphenate) in `data-brand`.<br>
	On line 3, replace the artist name and dates.<br>
	On line 9, replace the artist bio.<br>
	On line 13, replace the feature description.<br>
	On line 18, replace the name of the featured series in ALL CAPS.

- To move the current artist into the Previous Artists section, paste the following template into line 26 and replace every instance of the artist first/last name:

	```
		<div class="col-sm-4">
			<a href="/store/brand/leanne-shapton" class="salmon">
			<img src="/store/images/artists/PR-Posters-10-Leanne_Shapton.jpg" alt="Leanne Shapton">
			2016.X
			</a>
		</div>
	```

	Don't forget to change the year and Roman numeral as well.

- When you're done making these changes, scroll to the bottom of the page and enter a descriptive commit message (ie. *add new featured artist: Maia Ruth Lee*). Then commit changes.

- Copy-paste the complete updated code into Lightspeed:

	1. Log in to: http://pictureroom.mcnallyjacksonstore.com/store/admin/login

	2. Go to **Custom Pages > Featured Artist**

	3. Click the **< >** icon under **Edit Page Content** to switch to HTML view

	4. Replace everything with updated code and click **Save**.

- Check the [Featured artist page](http://pictureroom.mcnallyjacksonstore.com/store/featured-artist) to make sure everything looks right. Edit again if necessary – make sure to include a commit message if you change anything (ie. *fix typo*)

**NOTE: Changing the actual colors is a bit more complicated and requires working from the terminal. For now, just let me know when you're done with these steps and I will update the colors. Next time I'm in town I'll show you how this works!**

===========================================================================

##README for Brooklyn2014 theme

Thank you for taking the time to read this file.
Below are some very important notes on how to make changes to the look of your web store.

If you have opened this file from the original brooklyn2014 theme, DO NOT, manually modify ANY of the files in this folder.
The Brooklyn2014 theme may get updated automatically and any changes you make will be lost.

To begin designing a custom theme, use the following directions:

1. Go to Admin Panel and choose the Themes menu.
2. Click on "Manage My Themes".
3. Ensure brooklyn2014 is selected and *click the "Copy selected theme for customization" button. This makes a copy of the brooklyn2014 and switches Web Store to use it.

At this point, you can make changes to the files in the newly created brooklyn2014copy folder as you desire.

What files you change depends on what types of changes you're trying to make. If you are simply wanting to adjust some colors,
our highest recommendation is to use the Edit CSS feature under Themes in the Admin Panel. Copy elements from the other theme files
or make new elements and add them to custom.css. The elements in custom.css will take priority.

Your copy of the brooklyn2014 will contain a folder 'views' with files from the theme's core viewset.
For major changes including layout, you can adjust/amend these files.

The system works like "onion layers". If it finds the file in the theme, that's what it uses. If it's missing, it goes back to the equivalent file under the /protected folder. For this reason, you never have to modify a protected file because your theme always takes priority.

A final note, once you are happy with your changes,
1. Navigate to the Admin Panel, choose the Themes menu.
2. Click on "Manage My Themes".
3. Ensure your brooklyn2014copy is selected and *click the "Remove Unchanged Files from selected theme". This will remove any files
that are identical to their parents in the core. Thus, if changes are made to those core files, your theme automatically picks them up as well.

In summary: Never modify anything under /protected/views-cities3 or under /themes/brooklyn2014.
Keep all your customizations under your own theme folder. This will allow you to have a great Web Store that can be continuously updated automatically and you'll never run into conflicts.

------
* Depending on your hosting plan (Lightspeed Hosting, Self Hosting) this option is not available.
