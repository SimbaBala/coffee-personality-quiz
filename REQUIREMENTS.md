# Coffee Personality Quiz - Requirements

## Overview
A personality quiz that recommends coffee drinks based on lifestyle preferences. Built for Basecamp Coffee's loyalty program turnaround.

---

## Personality → Coffee Pairings

1. **Bold Adventurer** → Double Espresso
   - Tagline: "You live for intensity"
   - Description: For those who embrace challenges and live life at full throttle

2. **Sweet Enthusiast** → Caramel Latte
   - Tagline: "Life's too short for bitter"
   - Description: You find joy in the little things and sweetness in every moment

3. **Social Butterfly** → Cappuccino
   - Tagline: "Coffee is better with company"
   - Description: You thrive on connection and sharing experiences with others

4. **Night Owl** → Red Eye (coffee + espresso shot)
   - Tagline: "Sleep is optional"
   - Description: Your best hours are after dark, fueled by determination and caffeine

5. **Indulgent Treat** → Mocha with Whip
   - Tagline: "Coffee is dessert"
   - Description: You believe in treating yourself to the finer things in life

---

## Result Display Logic

**Show all percentages** - Display breakdown of all personality types with their percentages:
- Example: "You're 40% Bold Adventurer, 30% Night Owl, 20% Social Butterfly, 10% Sweet Enthusiast, 0% Indulgent Treat"
- Show all 5 coffee recommendations with their corresponding personality descriptions
- User can explore what each personality means and what coffee it recommends

---

## Visual Style

**Warm & Cozy** (Style 4):
- Color palette: Earth tones, warm browns (#6b4423, #8b6f47, #d4a574), cream backgrounds (#fff8e7, #f5e6d3)
- Typography: Serif fonts (Palatino, Georgia) for warmth and approachability
- Layout: Rounded corners, soft shadows, inviting spacing
- Feel: Like stepping into a cozy neighborhood coffee shop
- Gradients: Subtle warm gradients for depth
- Borders: Soft earth-tone borders (#d4a574)
- Hover states: Gentle lift with warm color transitions

---

## Icons & Images

**Icons:** YES - Use emojis for each answer option to make choices more visual and engaging

**Images:** SKIP FOR NOW - Can add coffee photos later during iteration phase

---

## Quiz Questions

### Question 1: How do you spend your ideal weekend?
- 🏔️ Trying a new extreme sport or adventure → Bold Adventurer
- 🍰 Brunch at the cutest cafe in town → Sweet Enthusiast
- 🎉 Hosting friends for game night → Social Butterfly
- 🌙 Binge-watching shows until 3am → Night Owl
- 🛁 Spa day with all the extras → Indulgent Treat

### Question 2: What's your go-to travel style?
- 🎒 Backpacking through unknown territories → Bold Adventurer
- 🏰 Instagram-worthy destinations with charming cafes → Sweet Enthusiast
- 🏖️ Beach resort with friends and activities → Social Butterfly
- 🌃 Exploring nightlife and late-night food scenes → Night Owl
- ✨ Luxury resort with room service → Indulgent Treat

### Question 3: Pick your ideal dinner:
- 🌶️ Spicy food challenge at a hole-in-the-wall → Bold Adventurer
- 🧁 Dessert-first at a trendy spot → Sweet Enthusiast
- 🍕 Group dinner with lots of sharing plates → Social Butterfly
- 🍜 Late-night ramen run → Night Owl
- 🥩 Fine dining tasting menu → Indulgent Treat

### Question 4: How do you handle Monday mornings?
- 💪 5am workout to crush the day → Bold Adventurer
- ☀️ Positive playlist and a smile → Sweet Enthusiast
- ☕ Coffee date with a coworker → Social Butterfly
- 😴 Hit snooze repeatedly → Night Owl
- 🛌 Take it slow with a luxe breakfast → Indulgent Treat

### Question 5: Your perfect evening looks like:
- 🧗 Rock climbing or a new intense class → Bold Adventurer
- 🎨 Crafting or a cozy book → Sweet Enthusiast
- 🎤 Karaoke or trivia night out → Social Butterfly
- 🎮 Gaming marathon till dawn → Night Owl
- 🍷 Wine and gourmet cheese board → Indulgent Treat

### Question 6: Choose your vacation vibe:
- ⛰️ Hiking to a remote summit → Bold Adventurer
- 🌸 Cherry blossom festival in spring → Sweet Enthusiast
- 🎪 Music festival with your crew → Social Butterfly
- 🌆 City that never sleeps → Night Owl
- 🏝️ Private villa with a personal chef → Indulgent Treat

---

## Technical Notes

- Framework: Next.js (React)
- Language: JavaScript
- Styling: CSS-in-JS or Tailwind CSS for warm/cozy aesthetic
- Logic: Track answer selections, tally personality scores, calculate percentages
- Results page: Show all 5 personalities with percentages, descriptions, and coffee recommendations

---

## User Flow

1. **Welcome page** - Introduction to the quiz with inviting copy
2. **Questions (6 total)** - One question per page, radio button selections with icons
3. **Results page** - Show personality breakdown with percentages, all coffee recommendations visible
4. **Optional CTA** - Link to Basecamp Coffee locations or app download

---

*Ready to build!*
