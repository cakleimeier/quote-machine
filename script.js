	//this is my array of quotes
	var quoteArray = [
	  "The spiritual disposition of a poet inclines to catastrophe. -Osip Mandelstam",
	  "Pain is inevitable. Suffering is optional. -Haruki Murakami",
	  "That which you manifest is before you. -Steinbeck",
	  "Find what you love and let it kill you. -Bukowski",
	  "Not a wasted word. This has been a main point to my literary thinking all my life. -Hunter S. Thompson",
	  "Touch comes before sight, before speech. It is the first language and the last, and it always tells the truth. -Margaret Atwood",
	  "Is there no way out the mind? -Sylvia Plath",
	  "If you only read the books that everyone else is reading, you can only think what everyone else is thinking. -Haruki Murakami",
	  "Only those who will risk going too far can possibly find out how far one can go. -T. S. Eliot",
	  "She didn't read books so she didn't know that she was the world and the heavens boiled down to a drop.  -Zora Neale Hurston",
	  "If I do not write to empty my mind, I go mad. -George Gordon Byron",
	  "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven. -John Milton",
	  "The value of education is among the greatest of all human values. -Virginia Woolf",
	  "The ability to think for one's self depends upon one's mastery of the language. -Joan Didion",
	  "That it will never come again is what makes life so sweet. -Emily Dickinson",
	  "You can, you should, and if you're brave enough to start, you will. -Stephen King",
	  "Writing is an act of faith, not a trick of grammar. -E. B. White",
	  "The limits of my language means the limits of my world. -Ludwig Wittgenstein",
	  "A poet is, before anything else, a person who is passionately in love with language. -W.H. Auden",
	  "Words are, of course, the most powerful drug used by mankind. -Rudyard Kipling",
	  "Think before you speak. Read before you think. -Fran Lebowitz",
	];

	//this is the number of quotes in the array
	var quotesLength = quoteArray.length;

	//these are the old and new quotes, initialized to be nothing
	var oldQuote = -1;
	var nextQuote = -1;
	var currentQuote = -1;

	$(document).ready(function() {
	  newQuote();
	  //this function gets a new quote and displays it
	  function newQuote() {
	    while (nextQuote == oldQuote) {
	      //this is the mathematical equation that will multiply the decimal that
	      //results from math.random by the 1 more than the length of the array,
	      //guaranteeing that the last number in the array can also be returned.
	      //It then rounds down to the nearest whole number, which will be a valid
	      //index of the array. This number is saved as a variable.
	      nextQuote = Math.floor(Math.random() * (quotesLength + 1));
	    }

	    //makes this new quote the old quote so that you can generate a new one
	    oldQuote = nextQuote;
	    currentQuote = quoteArray[nextQuote];
	    //displays the new quote
	    $("#thisQuote").text(currentQuote);
	  }

	  //this function establishes that, onClick to the new quote button,
	  //the newQuote function is run
	  $("#newButton").click(function() {
	    newQuote();
	  });

	  //this function establishes that, onClick to the tweet button,
	  //the current quote is prepopulated into the tweet that will
	  //open in a new window
	  $("#tweet").click(function() {
	    console.log("function is running");
	    var quoteURL = encodeURIComponent(currentQuote);
	    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quoteURL);
	  });

	});