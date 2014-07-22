JW Player Disable Seek
==========

This is a small JavaScript library for use with the JW Player. It makes the player only seekable within the time that the viewer has watched. Seeking ahead of this point will not work. Great for training videos.

### [Demo](http://www.pluginsbyethan.com/github/disableseek.html)

Implementation:
==========

The file disableseek.js simply needs to be loaded unerneath the closing script tag for your JW Player embed. It is that simple. Like so:

<pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;disableseek.js&quot;&gt;&lt;/script&gt;
</pre>

Example:
==========
<pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jwplayer.js&quot;&gt;&lt;/script&gt;
&lt;div id=&quot;player&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
jwplayer('player').setup({
&nbsp;&nbsp;'width': '575',
&nbsp;&nbsp;'height': '400',
&nbsp;&nbsp;'file': 'video.mp4'
&nbsp;&nbsp;'image': &quot;video.jpg&quot;
});
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;disableseek.js&quot;&gt;&lt;/script&gt;
</pre>

The source code is available for this script. There is just a .js file for JavaScript. Publishing the JavaScipt can be simply done with any text editor. Enjoy~! :)