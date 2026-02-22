export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required' });
  }

  const SOP_CONTENT = `
CORA FOOD PANTRY
Standard Operating Procedures (SOPs)
January 2026

MORNING SET UP
Standard Operating Procedure (SOP)

- If you ever come to the pantry and there has been a power outage, call a staff member immediately. Phone numbers are:
  - Melissa Beard: 919-210-1307
  - Terrance Ross: 919-579-7275
  - Mackie Hunter: 336-314-9779
- Uncover produce that was left on tables and check over in case any needs to be thrown out.
- Assess what produce is available from the previous day if the pantry assistant or pantry manager has not yet done this.
- Make a pig box with any rotten produce. Set up the pig box under the produce table closer to the walk-in cooler. It will stay there until it is full as produce may be added to it as the day progresses. Once it's full, take it outdoors to a shopping cart. Place the pig box in one of the shopping carts outside.
- It is IMPORTANT to look in the outdoor coolers. In many cases, the produce in the outdoor coolers is the oldest and needs to be served ASAP. Keys to the outdoor coolers are on a plastic spiral key ring in the top drawer of the mini-file cabinet in the Pantry Assistant's office.
- Bag any lettuce that needs to be bagged. Please wear gloves when bagging food, and please make sure the area in which you are bagging is clean.
- Serve the oldest produce first. For example, if there are carrots left over from the prior day but the display needs to be replenished, use the newer, fresher carrots to create the base layer and then top off the display with the older produce that needs to move first.
- If there are questions about what should be served first, or produce that should be held back for future distributions, please contact a staff member.
- If there is no staff person to direct what needs to be prioritized on the tables, then model what was put out the previous day.
- Miscellaneous produce can be grouped together on a table.
- Check the bread for mold, discarding what is past use.
- Set out/organize new bread or frozen bread, if there is any.
- If necessary, re-stock the meat refrigerators with available product.
- Consult, as needed, on the daily menu.
- Ask any questions shopping assistants may have.
- Assist with packaging eggs, if needed.
- Receive miscellaneous produce items from the cullers to put into the produce fridge. NOTE: Retail Recovery should always be refrigerated.
- Group like items in the produce cooler, so that fruit cups are together, bagged salads are together, cut veggies are together, etc.
- Assist with moving TEFAP produce, if needed.
- BANANAS SHOULD NOT BE REFRIGERATED! Bananas turn brown when they are refrigerated whether they are overripe or not. Bananas should be left on displays and covered at the end of each day.
- If there are both ripe and green bananas, place both out so people can choose. Try to move the ripe bananas first.
- All fruits and vegetables should be refrigerated. While many fruits and vegetables do not actually require refrigeration, most have come to us already refrigerated, thus requiring ongoing refrigeration in order to avoid spoilage.
- Do your best to assess ALL the produce that is in the pantry, the indoor, and the outdoor coolers. Food can easily be "hidden" behind other boxes or pallets.
- Make it look nice! CORA always strives to provide a dignified shopping experience.
- Before the morning huddle, break cardboard boxes down and take them to the cardboard dumpster.
- Sweep!
- Mop up any water around refrigerators and alert staff if there are leaks.
- If there is time, clean the "inside" shopping carts.

IMPORTANT POINTS TO NOTE:
Regular Deliveries:
- Screech regularly delivers lettuce and other produce to Pittsboro, often on Tuesday mornings.
- Lil Rooster often delivers lettuce to Pittsboro on Fridays.
- Deliveries from Bibi's Produce to both pantries arrive on Monday mornings.
- Deliveries from InterFaith Food Shuttle are the 2nd and 4th Tuesdays to Siler City and sporadically to Pittsboro.
- Deliveries from the Food Bank are the 1st and 3rd Wednesdays in Pittsboro and the 4th Tuesday in Siler City. CSFP arrives the 1st Wednesday and TEFAP arrives the 3rd Wednesday in Pittsboro.
- Retail recovery deliveries come in from grocery stores every day.

Dating boxes: Date produce boxes when they arrive, just as we do with retail recovery so that we know which produce to use first. First to spoil, first out!

INVENTORY
Standard Operating Procedure (SOP)

End of Year inventory:
- All inventory will be counted on June 30th. If this is not possible, inventory may be counted on an earlier date and nothing will be moved between the date of the inventory count and the end of the day on June 30th.
- All purchased items will be counted, the number of cases and number of individual items will be recorded, as well as the brand name, description of item, and number of items per case.
- All donated items will be weighed and the item description and weight will be recorded.

Regular inventory through the year:
- Program inventory will be conducted once a quarter by the program manager.
- Pantry warehouse inventory will be conducted once a month by any staff available.
- Pantry inventory will be conducted at each pantry on a weekly basis at the direction of the pantry managers.
- Only purchased items and items donated in quantities greater than 20 cases will be counted.
- Inventory counts will be given to the Systems Director within 3 days.
- Systems Director will maintain a shared spreadsheet with ongoing inventory totals.
- This spreadsheet will show product name; purchase date; original quantity; running counts; and best by date.

Inventory movement:
- As needed, transportation and warehouse staff will be responsible for pulling orders from backstock in the warehouse and delivering to pantries, partners, etc.

FOOD DONATIONS
Standard Operating Procedure (SOP)

GOALS:
- Provide a dignified and respectful experience of donating food to and receiving food from CORA
- Limit food waste
- Distribute not only safe food but quality food items
- Inform clients about extension dates and increase awareness about food safety/quality

TO THIS END:
- All donors will be greeted when they walk in and thanked for their donation.
- Food Safety is top priority, and all frozen and refrigerated items will be moved into cold storage as quickly as possible.
- Pantry Managers will monitor recalls by subscribing to FDA recall notice emails. Any recalls applicable to items CORA may have received will be communicated to volunteers through printed signs in the sorting area or relevant food storage area. Any food items received that are subject to recall will be discarded and not distributed.
- We will not accept or distribute any partially used items or items whose packaging is opened.
- We will not accept or distribute any baby formula or adult nutrition supplement past the date on the package.
- We will not accept donations with dates past the extension dates provided by the USDA.
- Food items past the extension date will be discarded or offered to farmers for animals.
- Items less than 3 months past the best-by or use-by date, or within 3 months of their best-by or use-by date will be sorted directly onto the shelves in the Pantry.
- Items more than 3 months past date and within extension dates from the USDA will have a bright-colored sticker with the extension date written visibly on it placed on the front of the package/can and sorted to a designated area to be distributed on the miscellaneous shelf during service. Do not write anything on the packaging of the item.

SORT AND STOCK
Standard Operating Procedures (SOP)

General Description:
Volunteer tasks include accepting and recording donations, sorting items, stocking shelves, and maintaining cleanliness. Volunteers must be able to comfortably lift at least 25 pounds repeatedly throughout their shift. Volunteers must stay for their full shift (especially as donations are accepted from 9 AM to 3 PM). If things are slow, clean the pantry, wipe shelves, organize items, or seek direction from staff.

Shift Communication:
- Pantry Managers will hold a "huddle" for all volunteers at the beginning of every shift to share all important information specific to the day.

Food Safety Procedures:
- Prioritize getting all refrigerated and frozen products into cold storage as quickly as possible.
- When processing refrigerated items like eggs or produce, make sure items are out of the coolers for as short a time as possible and put back in the fridge before you walk away.
- When culling retail recovery produce, remove one box at a time from the fridge. Return items for distribution to refrigeration as quickly as possible.
- Check the date on all retail recovery items. Items that are past their extension date or visibly inedible should be discarded. Items with the nearest expiration dates should be placed in the front of refrigerators, items whose expiration dates are slightly further out should be in the back.
- Check all cans for dents or damage to the seals at the top and bottom. Discard any cans with damaged seals, rust, or extensive dents.
- Check that all packaging is sealed. Discard any opened items. If outer packaging is damaged but items are individually packaged, items can be distributed as long as individual packaging is intact.

Donation Intake Procedures:
Always prioritize helping donors. At least one volunteer should be stationed near the donation door during operating hours to greet incoming donors.
When donors arrive: greet them, thank them for their donation, ask if they would like a receipt or if they would like to leave a name for their donation.

1. Weigh All Donations:
   - This includes food, empty bags, egg cartons, and non-food items.
   - Round to the nearest pound: .4 lbs or less round down; .5 lbs or more round up.

2. Log the Donation:
   - Use the Community Donations sheet - write clearly.
   - Record: date, donor name (or "Anonymous"), and pounds donated (no decimals or "lbs" abbreviation), and your initials.
   - If a receipt is requested: Fill out the receipt form. Make sure both copies are clear and can be easily read. Donor gets the white copy, the yellow copy goes in the file bin. Log the donation on the Community Donations sheet. Make sure information on the receipt matches information on the Community Donations sheet.

3. Cash or Check Donations:
   - Place all cash or check donations in the white lock box.
   - Do NOT open envelopes with cash or checks inside them.
   - Do NOT tally cash or checks for any group, including PORCH neighborhood or community group. Staff will follow up with them.
   - Do NOT log on the intake form.
   - Do NOT give cash or check donations to another volunteer or to staff. They must go in the white lock box.
   - Use provided envelopes if needed.

4. Retail Recovery Donations:
   - Do NOT log on the Community Donations sheet.
   - Use the Retail Recovery Form.
   - Weigh all donations by category and record total pounds of each category donated in the boxes on the Retail Recovery Form.
   - Include any non-refrigerated drinks with dry goods.
   - Put all refrigerated donations into fridges immediately.

5. Accuracy:
   - Avoid abbreviations; write full names of donors and organizations.
   - Only record the rounded number of donated pounds.
   - Make sure all information on the Community Donation sheet matches the information on the donation receipt.

Sorting Process:
1. Check all items for damaged or opened packaging. Discard any item that is partially used or not in sealed packaging. Discard any cans with dents to the top or bottom, or rust anywhere.

2. Check Expiration Dates:
   - If an item is within 3 months of the best-by or use-by date, move to the shelves in the pantry.
   - If an item is more than 3 months past date: Place in the "Past Date" the bottom sorting shelf.
   - If you cannot find a date on an item, place it in the "No Date" box on the bottom sorting shelf.
   - During downtime, use the Food Bank Extended Date list in the binder in the wall file organizer in the sorting area to verify extension dates for items in the "Past Date" box.
   - If the item is within the extended date, put a colored dot sticker on the front label. Do not cover the original date with the sticker. Write the extended date on the sticker.
   - If an item is past the extension date, place it in the "Trash" box and empty the box into the outside garbage dumpster before the end of your shift. Do not throw expired food directly in the garbage can in the pantry as it will be too heavy to empty.

3. Sort in-date items by Category and Size:
   Group items first by category, then by type and can size. Stack flats neatly, do not put cans of different height on the same flat. Do not stack flats more than two high.

Categories:
- Protein: Tuna, chicken, salmon, SPAM, Vienna sausages, etc. on separate flats.
- Vegetables: Same vegetable per flat. Different random vegetables can be grouped.
- Starch: Separate flats for mac & cheese, spaghetti, ramen, potatoes, rice, hamburger helper.
- Pasta Sauce / Tomatoes: All tomato products and pasta sauces go in this section.
- Soup: Includes soup, chili, canned ravioli, broth and dry soup mixes.
- Fruit: Separate trays for each type of fruit. This may include dry, canned, and jarred fruit.
- Breakfast: Cereal, oatmeal, pancake mix, grits, etc.
- Beans: Black, pinto, kidney, refried, etc., each on their own flat unless very limited.
- Baking and Grains: Cornmeal, jiffy mix, flour (all types) together.
- Peanut butter and Jelly: Stored near each other on the miscellaneous shelves.
- Milk: Fresh milk is stored in the bottom of the refrigerator to prevent drips on other food. Shelf-Stable milk should be grouped on a shelf with miscellaneous items.
- Miscellaneous Items: Condiments, syrup, snacks, protein shakes, juice, cake/brownie mixes, oil, spices, etc.
- Extended Date Items: Stored in the designated area of the pantry.
- Toiletries and Toilet Paper: Toilet paper: 2 rolls per small brown bag, stored in the designated location. Hygiene items have a designated shelf in the pantry.
- Baby Food and Diapers have a designated spot in the pantry.
- Pet Food has a designated area in the pantry.

Stocking Process:
- Regularly check and restock pantry shelves from sorted flats or backstock using utility carts.
- If there is time, turn labels on items facing out like you would find in a grocery store.
- Stock shelves neatly, do not overfill. Do not stack more than 2 flats high on pantry shelves.
- Return empty flats to the sorting area, stacked neatly in banana boxes on the top of the sorting shelf.
- When the pantry shelves and sorting shelves are full, cases can be moved to the bagging/backstock area.
- Shelves in the bagging/backstock area are labeled. Keep items on the shelves in the correct spots.
- Regularly check and restock fresh produce, deli, bakery items, and meat as needed.
- Make sure the items that are closest dated or need to be used quickly are distributed first.

Cooler Organization:
- Group like items together in the produce and bakery coolers.
- Use trays and baskets to keep items neatly displayed in the coolers.
- No meat should be stored above other items.

Special Programs:
CORApacks: Set aside items on the current CORApacks food list (check it each time) on designated shelves. Sort and store CORApacks items in labeled boxes by category. Fruit cups and applesauce cups are stored separately. Fruit pouches are baby items, not CORApacks.

Prohibited Items: Do NOT distribute: Medicine, supplements and vitamins, energy drinks, or items containing alcohol (e.g., mouthwash or cooking wine). Place these in the Pantry Manager's office for redistribution to other organizations.

Clean-Up & End of Shift:
15 minutes before end of shift:
- Clear and clean the donation intake table.
- Wipe down utility carts.
- Wipe off shopping cart handles.
- Move unsorted donations to the nearby pallet.
- Dispose of full trash and recycling bags in the bins outside.
- Break down cardboard boxes (unless banana boxes—store those).
- Recycle clean cardboard; waxed boxes go in the trash.

After all shoppers have left the pantry in the afternoon:
- Return all perishable items to refrigerators.
- Check quality and freshness of items in deli, bakery, and produce fridges.

RETAIL RECOVERY
Standard Operating Procedure (SOP)

Store-Specific Interaction Summaries:
- Volunteers must receive and review store-specific summaries before pickups.
- All new volunteers must shadow at least 1-2 shifts, or until they feel comfortable making pickups on their own.

Volunteer Preparedness:
Volunteers should have the following on hand:
- Freezer bags or blankets
- Thermometers for temperature tracking
- A notebook and pen to record temperatures at the store
- Banana boxes or bins for transporting food from certain stores

Timing and Arrival:
- Be on time. Arriving too early or too late may result in missing available donations.
- If a volunteer cannot make their pickup they should contact the pantry manager as early as possible.

Temperature Tracking:
- Before you leave the store, check and record the temperature of one frozen and one refrigerated item.
- When you arrive at CORA, check and record the temperature of the same frozen and refrigerated items.
- Use provided freezer blankets to keep cold items within a safe temperature range during transportation.

If You Can't Take Everything:
- Prioritize by perishability and value (e.g., meat and produce over bread).
- Leave behind items with the longest shelf life or least urgency.
- Document and let the Pantry Manager or Pantry Assistant know what was left and why.

Sorting:
Sort all donations by category: Produce, Bakery, Deli, Meat, Dry-goods/drinks, Non-food (flowers, plants, seasonal items).

After items are sorted they should:
- Be weighed by category and have weights recorded on the Retail Recovery form
- Stay in boxes
- Be labeled with a date
- Placed in the appropriate storage area

Weighing and Reporting:
- Weigh food by category (e.g., deli, bakery, produce).
- Fill out the Retail Recovery Sheet with the weight of each category.
- Record the temperatures of the items you tracked from pickup and arrival at CORA.
- Place the completed sheet in the wall folder.

Storage at CORA:
- Meat should always be frozen
- Produce, deli, and pastries should be refrigerated
- Bread can be frozen or kept at room temperature. Ask the Pantry Manager or Pantry Assistant if unsure.

Store-Specific Summaries:

Siler City Walmart (919-663-6000):
- Pickup time: 9:00 am
- Go to the back of the building, ring the bell or knock on the back door.
- Mention you are there to pick up for CORA.
- Food is usually in boxes but not sorted by category.
- Must take a truck or big vehicle to fit 7 to 10 boxes.

Siler City Food Lion (919-742-9966):
- Pickup time: 10:30 am
- Go to the back of the building, ring the bell or knock on the back door.
- Mention you are there to pick up for CORA / Food Bank.
- Food is usually in boxes but not sorted by category.
- Must take a truck or big vehicle to fit 7 to 10 boxes.

Siler City Piggly Wiggly (919-742-9888):
- Pickup time: 10:00 am
- Go through the front entrance and then go all the way to the back towards the bakery section.
- Speak to whoever is at the bakery section. Mention you are there to pick up for CORA.
- They only donate bakery and pastry items. Usually in a grocery cart.
- Remember to take your own boxes.

Chatham Downs Harris Teeter (919-960-0275):
- Pickup time: 9:00 am
- Go through the front door and to the right to the Produce and Bakery departments.
- Speak to anyone in the Produce and Bakery Departments. Identify yourself as there to pick up for CORA.
- Food will not be in boxes. Transfer to boxes at your car and keep produce and bakery separate.
- Make sure to take several boxes with you.

Governors Club Food Lion (919-942-1467):
- Pickup time: Saturdays and Sundays at 10am-12pm (can go earlier).
- Food is kept in shopping carts. Go in the front door and ask anyone in the deli, meat, or produce area where the retail recovery donation food is kept for CORA.
- Plan to bring approximately 10 banana boxes from CORA.
- Return shopping carts to the front of the store.
- Individual fruits and veggies are often rotten and should be culled at the store.

Briar Chapel Food Lion (919-929-9501):
- Pickup time: Saturdays and Sundays 10am-12pm.
- Go through the front door then go to the produce section, deli, bakery, and meat departments.
- Speak to anyone working in the deli, bakery, meat, or produce area.
- Food is usually in boxes.
- Be wary of loose veggies and fruit.

Pittsboro Food Lion (919-542-0861):
- Pickup time: Tuesdays and Thursdays at Noon.
- Go to the back of the store where there is a ramp that goes to the back door near the loading dock.
- There is an intercom box to the left of the back door. Push the button. Say "CORA Food Pantry at the back door, please."
- Tanya is the main person to speak to.
- Most of the time donations are in boxes by category. Please consolidate by category so it is easier to weigh at the pantry.
- When possible, cull the produce while at the store.

CAR LOADING
Standard Operating Procedure (SOP)

Setup for Loading:
- Set up a tent if needed (requires 4 people).
- Place cones to designate the loading area and guide traffic.
- Put the sign out to direct neighbors toward the loading area.
- Place the shopping slip collection bag on a cone out of the way.

Preparing to Load Carts:
- Check the ticket on each cart: If "S" is circled, indicates a Senior Box and Senior cheese needs to be added to the cart.
- Secure fragile items: Do not place anything except boxes on the bottom rack of the shopping cart. Ensure eggs, cakes, and any other fragile items are safely secured in the child seat area or the top of a paper bag.

Bringing Carts to Loading Area:
- Position carts securely to prevent rolling.
- Keep a clear path open from the load-out door to the loading area.
- Ask for the shopping slip for each family (Spanish: "¿Tiene el/los papelito/s?").
- Ask where in the vehicle they would like their groceries to be placed (Spanish: "¿Dónde quieres la comida?").

Loading Groceries:
- Carts must not be allowed to roll into the car being loaded or other cars in the parking lot!
- Before loading, ensure the number on the shopping slip from the neighbor matches the number on the shopping slip on the cart and confirm the name is correct.
- Place both slips into the designated bag once confirmed.
- Load one cart at a time if there is more than one family in the vehicle.
- If two people are car loading, one should stabilize the cart while the other places items in the vehicle.
- Once all groceries have been loaded and the cart is empty, remove the shopping slip from the cart handle and bring the empty cart back inside.

Special Situations:
- Can someone give me a ride home? NO - volunteers should not transport Neighbors for liability and safety reasons.
- Can I walk a Neighbor home? NO - do not leave the premises with Neighbors.
- Can a Neighbor borrow a cart? YES, but do not allow use of red shopping carts. Transfer groceries to carts near the garage door designated for this purpose.

Safety Notes:
- You MUST wear close-toed shoes.
- Do NOT place drinks on either of the electrical panels.
- Do NOT place food directly on the floor (unless it's for the pigs).
- Do NOT leave sharp objects, knives, box cutters, scissors in the pantry. Those must remain on the warehouse side of the building.

SHOPPING ASSISTANT
Standard Operating Procedures (SOP)

Before the Pantry Opens:
- Arrive early. Get a name tag and introduce yourself to other volunteers.
- One or two volunteers use the daily menu to put numbers/number cards designating the limits for each item on the produce tables and TEFAP shelves.
- Ensure a few carts are stocked with paper and plastic bags.
- Clean and organize the pantry space.
- Wipe and reset the Shopper Number Sheet.
- Check in with the Pantry Assistant for any additional prep tasks or stocking needs.
- Attend the morning team huddle for updates and role assignments.
- Do a final walkthrough of the Pantry to ensure readiness.

During Pantry Hours:
- Intake volunteers mark a star next to each number as Neighbors are ready to shop.
- Volunteer shoppers take turns calling Neighbors by number (e.g., "Neighbor #1").
- Make sure you're calling the right number and check lower numbers to make sure none were skipped.
- Greet the Neighbor warmly. Ask if they've been to CORA before. If new, explain the shopping process.
- Strike through the number on the Tally Sheet. Tape the shopping slip to the shopping cart.
- Guide Neighbors through each section of the Pantry.
- Explain quantity limits based on family size (large items count as two).
- Focus on what is available, not what's missing.
- Keep conversation friendly and respectful—dignity and equity are priorities.
- Assist with bagging items, tying plastic bags securely.
- Encourage free choice, without judgment about food selections.
- Follow designated item limits exactly—no substitutions.
- Tear off the bottom half of the shopping slip and hand it to the Neighbor.
- Thank the Neighbor and direct them to drive around to the loading area.
- Bring the cart to the door for Car Loaders.

End of Shift:
- Morning Volunteers should ensure that Afternoon Volunteers have arrived before leaving.
- Share any updates for shopping that day with Afternoon volunteers before leaving.
- Return your name tag to the designated box.

Afternoon Shift & Pantry Closing:
- Arrive on time for a quick huddle before the start of your shift.
- Work with the Pantry Assistant to store fruits/vegetables in the cooler.
- Check items in the deli, bakery, and produce coolers for quality and freshness.
- Clean display and storage areas.
- Help ready the Pantry for the next day.

PITTSBORO FRIDAY DRIVE-THRU
Standard Operating Procedure (SOP)

During pantry clean-up on the previous day: put together produce bags from items on the produce tables.
Volunteers make CORA grocery bags ahead of time. These volunteers can also assemble TEFAP bags when needed, and make cartons of eggs.

Set-up the morning of service:
- Make mixed produce bags, deli bags, bread bags.
- The number of bags depends on anticipated number of families to be served.
- Quantities of items in the bags depends on inventory on hand.
- Make sure items closest to spoilage are distributed first.
- Move CSFP boxes near garage door, move CSFP cheese to fridge near door.
- Decide who is responsible for getting each item onto the carts.

During service - items loaded per family:
- CORA bags - one bag for every 2 people in the household (always rounding up for odd numbers).
- Produce bag
- Bread bag
- Deli bag
- Meat
- Dessert item(s)
- Eggs
- Milk (if available)
- TEFAP (if available) - frozen, cheese, dry goods
- Any bonus items

If shopper has dietary needs, tailor items on cart to their needs as possible.
Before the cart goes out, double check that all items have been provided.
When loading cars, ask the driver where they would like the food to go.

Intake guidelines:
- If someone is at CORA for the first time, have them fill out the info form.
- Don't ask the neighbor about CSFP, check Link2Feed.
- Check Link2Feed for number of visits in the month. Provide emergency bags for folks who have received their 2 visits and remind them of the monthly limit.
- NOTE: there is no 2 visit limit for TEFAP.

After service:
- Put away all food into coolers and freezers.
- Wipe down all carts.
- Put folding tables back in storage area.
- Take out trash and cardboard to dumpsters.
- Sweep.
- Get rid of any food that will spoil before the next service day.

NEIGHBOR INTAKE / CHECK-IN
Standard Operating Procedure (SOP)

Link2Feed makes undoing things challenging. If you are ever unsure or have questions, please stop and ask a staff member. It is important to ensure accuracy in our records.

Setup before service starts:
- Get computers from file cabinet for intake and for tech bar.
- Check intake computers for needed updates.
- Open Chrome browser on computers, log into Link2Feed.
- Straighten up lobby - magazines, kids area.
- Check and restock water bottles in fridge.
- Set up clipboard for community connector with check-in sheet.
- Number and cut shopping slips if not already done.
- Check that clipboards are ready for new shoppers with info forms.

When the doors open:
- Community connector greets shoppers, gets their CORA card.
- Community connector writes the shopper's name on the log sheet and a shopping slip.
- If the neighbor is at CORA for the first time, give them a clipboard with an info sheet.
- Community connector notes on the shopping slip if families are in the same car.
- Community connector gives the numbered shopping slip to shopper.

Checking in shoppers:
- Take your time! Accuracy is far more important than speed.
- Get shopper's CORA card, name and date of birth, or new neighbor info form.
- Find the person's page in Link2Feed.
- Check for prior food pantry or mobile visits in the month.
- Use "regular pantry visit" if available.
- Use "limited emergency pantry visit" if they are ineligible for a regular pantry visit.
- Complete shopping slip: number of people in household, TEFAP or CSFP visits (circle T and/or S on shopping slip), note special circumstances.

If the wifi is out and/or Link2Feed is unavailable:
- There is a paper log sheet available in the folder with the Community Connector Logs.
- Use this log sheet to collect the requested info from neighbors instead of logging into L2F.
- Once access to L2F is restored, use the information from the paper log to enter the visits into L2F.
- If L2F access is not restored before the end of the shift, give the paper log sheet to the administrative assistant or put it in the folder used for completed new intake forms.

Reminders for assisting someone shopping for the first time:
- Check info form to make sure it is complete and readable.
- When entering a new person into the system, first search for their name and birth date.
- Search for all family members to determine if they already exist in L2F before starting a new record.
- Complete duplicate check and enter form while shopper is in the building.
- After entering the new neighbor's info, put the date and your initials at the top and put the completed form in the folder for completed new intake forms.

At the end of service:
- Prepare shopping slips for the next service day (typically around 30).
- Move computers into the file cabinet in the intake office.
- Organize intake desk.
- Put current day's community connector log in the designated spot.
- Prepare clipboard with a new community connector log for the next day.
- Vacuum the lobby.
- Wipe down all surfaces in the lobby, desk, doors, chairs, etc.

COMMUNITY FOOD DONATIONS:
- Organize yellow donation receipts and community donations log by date.
- Compare receipts to log. All yellow receipts should also be listed on the log.
- Open "FY26 Food Donations" in Google Sheets.
- At the bottom of the sheet, click on the month for which donations are being entered.

For Pittsboro Pantry:
- Donations should be entered on the appropriate line for the specific donor.
- All donations listed as "anon" should be entered on the "anonymous" line.
- All donations under 30 pounds in weight should be entered as anonymous unless they align with a specific donor.
- All donations of 30 or more pounds with a specific donor listed should be entered with that donor's name. If not already on Google sheet, add under "miscellaneous."
- Do not add any lines to the spreadsheet except under "miscellaneous."

For Siler City:
- All donations are either anonymous or miscellaneous.

WAREHOUSE USE
Standard Operating Procedure (SOP)

- Anything expired by more than 12 months gets thrown out and Mackie is informed.
- Anything with bugs is immediately thrown out and Mackie is informed.
- When one truckload of empty pallets piles up, they are to be disposed of.
- Warehouse should be kept clean at all times, all trash and debris should be removed.
- Fans should be turned off when nobody is at the warehouse.
- Anything that is short-dated (within 2 months of printed date) should be brought to CORA PBO or CORA SC.
- Each item on every pallet should be marked clearly with program/pantry use and best by/use by dates.
- Pallets for different programs should be kept separate, in the designated areas of the warehouse.
- Pallets should not be stacked more than two high.
- Only pallets of canned items should have a pallet stacked on top.
- When there is not much food left on a pallet, it should be combined with another pallet to conserve space.
- Any bins with more than one item should be brought immediately to one pantry or the other and NOT taken to the warehouse.
- Never stack bins on top of one another.
- Do not stack heavy food on top of light food.
- All food should be used by date - first to expire is first out the door.
- Food should be checked for dates, bugs, exposure to rodents, etc weekly.
- Daisey should prepare a list of items to be set aside for CORApacks.
- Rodent and moth traps should be kept in place at all times.
- Date mobile boxes 1) with date packed and 2) with the date of the shortest date item in the box.

GROCERY CART USE/CHECK OUT BY NEIGHBORS
Standard Operating Procedure (SOP)

- Older shopping carts (stored outside) should be numbered.
- The neighbor lets the car loader know that they need to borrow a cart.
- The car loader transfers the groceries to one of the carts that can be borrowed.
- The car loader completes the cart log.
- At the end of the day, the car loader gives the log to the pantry assistant.
- The pantry assistant checks to make sure the cart has been returned within the appropriate time frame and marks it as "returned" on the cart log.
- The pantry assistant will contact any neighbor who has had a cart for more than 4 business days.
- The pantry assistant will do an inventory of the carts each week.

GRAB AND GO (during busy times/holidays)
Standard Operating Procedure (SOP)

- Set up floater shifts in Vhub for morning and afternoon. Those people will be the designated grab and go people.
- Post the names of the floaters/grab and go volunteers on the white board.
- Intake volunteers should ask neighbors whether or not they would like to wait to shop or get their groceries via grab and go.
- Grab and go food will be distributed the same way as Friday drive thru service. Pre-make meat, produce, bread, dessert, and deli bags. Also make bags for TEFAP food if available.
- Intake volunteers should write the neighbor's meat choice on the back of the intake/shopping slip.
- The floater or Pantry Assistant will get an 'outside' cart (not the red ones). Tape intake slip to cart, assemble the cart based on size of family. Give cart to car loader.

AFTERNOON CLOSING
Standard Operating Procedure (SOP)

- Make sure all red grocery carts are returned to the pantry and stacked.
- Using four volunteers, collapse the tent if used in Pittsboro.
- Put the directional signs inside the pantry.
- Put the traffic cones inside the pantry.
- Take the bag of shopper receipts/shopping slips inside, throw away the receipts, and attach the small bag to the tent.
- Using banana boxes and a grey cart, remove all display fruits and veggies and refrigerate all but bananas.
- Bananas should NEVER be refrigerated.
- Check the dates on the food in the deli and produce retail recovery refrigerators. Remove anything that is out of date or looks spoiled.
- Move items at the back of the refrigerators to the front, otherwise they will freeze and go bad.
- Clean all surfaces and displays.
- Take the banana box(es) of pig food out to outdoor grocery carts.
- Sweep and mop the floor.
- Take all trash to the dumpster.
- Break down cardboard boxes. Take all cardboard to the cardboard dumpster.
- Make sure the marked off aisle/area in the warehouse is clear.
- If you are the last person left, turn off ALL the pantry lights and make sure ALL pantry doors are locked.
`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: `You are a helpful assistant for CORA Food Pantry staff and volunteers. You answer questions based ONLY on the Standard Operating Procedures (SOPs) provided below. 

IMPORTANT RULES:
1. Only answer based on the SOP content provided. Do not use outside knowledge.
2. Always cite which SOP section your answer comes from (e.g., "According to the Morning Set Up SOP..." or "The Sort and Stock SOP states...").
3. If the answer to a question is not found in the SOPs, say clearly: "I don't see that covered in the current SOPs. Please check with a staff member."
4. Keep answers clear, practical, and easy to act on.
5. If a question involves safety or food handling, emphasize the relevant safety guidance.

SOP CONTENT:
${SOP_CONTENT}`,
        messages: [
          {
            role: 'user',
            content: question
          }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Anthropic API error:', error);
      return res.status(500).json({ error: 'Failed to get response from AI. Please try again.' });
    }

    const data = await response.json();
    const answer = data.content[0].text;

    return res.status(200).json({ answer });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
