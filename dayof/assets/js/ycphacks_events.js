/* -------------------------------------------------------------
 * YCP Hacks Event List Specification
 * -------------------------------------------------------------
 * YCP_EVTS_YEAR is the year these events take place on.
 * YCP_EVTS is an array of 5-tuples:
 *
 * [0] --> start time relative to midnight Saturday (in hours)
 * [1] --> end time ""
 * [2] --> Brief event title/description
 * [3] --> Brief location of the event
 * [4] --> event type
 *           0: general event
 *           1: workshop/tech talk/etc
 *           2: food event
 */
var YCP_EVTS_YEAR = 2016;
var YCP_EVTS = [
    [18, 20, "Hacker Check-in", "Hotel Lobby", 0 ],
	[18, 20, "Sponsor Check-in", "Hotel Lobby", 0 ],
	[19, 20, "Dinner" , "United Fiber & Data Room", 0],
	[20, 21, "Opening Ceremonies", "Main Ballroom", 0],
	[21, 57, "Hacking Begins!", " ", 0 ],
	[21.5, 22.5, "Team Building Activities", "3rd Floor Rooms", 0],
	[22.5, 23.5, "Inspiration Activities", "3rd Floor Rooms", 0],
	[23.5, 24, "Kahoot Trivia", "3rd Floor Conestoga Room", 0],
	[24, 25, "Midnight Snack", "United Fiber & Data Room", 0],
  [26, 26.5, "Cup Stacking", "Main Ballroom", 0],
	[31, 33, "Breakfast", "United Fiber & Data Room", 0 ],
	[33, 36, "Meet the Sponsors", "Hotel Lobby / Hallway", 0 ],
	[36, 37.5, "Lunch", "United Fiber & Data Room", 0],
	[37.5, 38.5, "iOS Development Workshop", "Lafayette Room", 0],
	[37.5, 38.5, "iOS Development Workshop", "Lafayette Room", 1, "An introductory class to iOS! Come learn about Swift and how to make a Tic-Tac-Toe app. Please come with XCode downloaded and up to date."],
	[38.5, 40.5, "Sharktank", "Lafayette Room", 0],
	[38.5, 40.5, "Sharktank", "Lafayette Room", 1, "Dick Heddleson and Ross Gibson from The Ben Franklin Technology Partners will work with you to refine your project and show you the next steps to turn your idea into a business"],
	[41.5, 42.5, "Hardware Workshop", "Lafayette Room", 0 , " Come sit in on the microcontrollers class to get an introduction to the ST Microelectronics platform and see how these controllers can help you get from concept to product quickly and easily."],
	[41.5, 42.5, "Hardware Workshop", "Lafayette Room", 1 , " Come sit in on the microcontrollers class to get an introduction to the ST Microelectronics platform and see how these controllers can help you get from concept to product quickly and easily."],
	[42.5, 44, "Dinner", "United Fiber & Data Room", 0],
	[44, 45, "Women In Tech Meetup", "Lafayette Room", 0],
	[45, 46, "Pennsylvania Hackers Meetup", "Commonwealth Room", 0],
	[46, 47, "Horrible Code Contest", "Lafayette Room"],
	[48, 49, "Midnight Snack", "United Fiber & Data Room", 0],
	[55, 56, "Breakfast", "United Fiber & Data Room", 0],
	[57, 58, "Submit Your Project!", "", 0],
	[57, 60, "Presentations & Judging", "Main Ballroom", 0],
	[60, 61, "Closing Ceremonies", "Main Ballroom", 0]
];
