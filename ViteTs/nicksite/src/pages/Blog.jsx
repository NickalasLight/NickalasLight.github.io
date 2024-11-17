// About.jsx
import React from 'react';

const Blog = () => <div>

<h1>The great war between the USA (me) and Austria (UNIQA a giant multinational Insurance Company) (Part 1)</h1>
<h3>November 16 2024</h3>
<br></br><br></br>
    <p>So, for the beginning of this whole thing, I decided to start with a fun project. Currently I am living here in Vienna as a student.</p>
<p>Don't ask me to speak German, I don't even have a duolingo streak. But I do love the city, the atmosphere, the quaint buildings and also, the rent control.</p>
<p>What I don't like currently is how private insurance works here. I would have expected a socialist utopia like Austria to be a bit more friendly to medical claims.</p>
<p>But I guess its only for natives, not foreigners, and to be honest, based on my experience and the experience of others, being a foreigner here is, well, interesting.</p>
<p>I live near a scientific institute, ISTA and have had the opportunity to speak with a wide range of smart and interesting people, all mostly foreigners here.</p>
<p>And, almost universally it has been the same  experience. Austrians, especially the Wieners ( :) ) don't like foreigners so much.   </p>
<p>I've been stopped twice now by security, while leaving shops, I've learned to always, always, always, grab the receipt, I think its because they think I'm a turk, because it happens</p>
<p>when I have a beard. Otherwise I am "Austrian-Passing" as one might call it. The ISTA scientists and students who happen to have black skin have reported to me, mostly at parties</p>
<p>during smoke breaks, when we all get a chance to talk after a beer or two (or three) much worse treatment, and its given me more understanding on what a certain group in America (or rather groups) </p>
<p>Also experiences in our country.</p>
    <br></br>
<p></p>
<p>Regardless, this isn't about all that, this is about a series of events that has led me to build a scraper that I can run on an aws cluster to grab the public details</p>
<p>of every lawyer in Austria. You see, they have a public, I believe government run, website. That allows you to search and see every legally registered lawyer in the country (7130 at the time of writing)</p>
<p>and for my problem, this is perfect, because I have a small sum that UNIQA refuses to return to me, while I continue to have to pay for their 120 euro per month student insurance</p>
<p>so that I have the valid insurance required to keep residence status here. For legal purposes I will keep the details vague, but it involves an ADHS(ADHD) diagnosis</p>
<p>which I received with some quite expensive but thorough testing, that confirmed what I had long expected, but had never been actually officially diagnosed with.</p>
<p>I have ADHD. The constant get up to move around, the need to smoke, drink tons of coffee, and the constant trailing of thoughts, or the fact that my parents pulled</p>
<p>me out of private school because I was too hyperactive, and disruptive, and they wanted to hold me back a year (I was homeschooled, which was actually a great boon for me in the end, but all that is for another post)</p>
<p>well all that should have clued me in. Anyways, the current crisis, dispute, war, or whatever you want to call it with UNIQA, "one of the largest insurance groups in its core markets of Austria and Central and Eastern Europe and has approximately 40 companies in 22 countries and serve about 10.5 million customers." according to google. </p>
<p>Has decided to withhold from me a sum of about 2500 euro, a sum small enough that to speak with a lawyer is probably not worth it. Most lawyers require large sums for consultation</p>
<p>The ones I talked to directly just directly told me "no thanks" or asked for very large sums for an initial consultation (300 euro, for 30 minutes). The problem is, I don't care too much about the 2500 euro, but I do care</p>
<p>about spending thousands on some hopeless case. So what I am looking for is a lawyer willing to work on the case, or at least give me a cheap or free initial consultation and then</p>
<p>we can negotiate a "Conditional Fee Agreement", where they receive a larger fee for winning, and a reduced fee for losing, or third party "quota litis". </p>
<p>Pure outcome based fees, or "quota litis" agreements directly with the lawyer are apparently illegal im Österreich, for "fairness". Apparently according to Section 879(2)(2) of the Austrian Civil Code ABGB(Thanks ChatGPT 4o, and I double checked).</p>
<p>However this apparently doesn't apply to third party funding from huge corporations with huge cash reserves, which are allowed to pay a lawyer and then receive to itself a percentage based return, or quota litis.</p>
<p>Regardless of all this, this has put me in the positiion where I need to speak with a lawyer, willing to look into the details of the case for a cheap initial fee.</p>
<p>All to determine whether a third party is willing to take the case, or a proper conditional fee agreement can be made.This, is well, unlikely. But probably some lawyer in Austria is willing to talk to me. So, that is where the scraper comes in.</p>
<p>So begins the great scraping journey followed by the great emailing which will have to use a translating LLM based on the languages they have listed in their profile.</p>


    <p>P.S. One might reasonably ask why I don't simply contact these third party funders directly, as this is likely a better option. Or least a similarly valid one, and to answer that, the primary reason I am doing this is more for the fun of building such an apparatus.</p>
    <p>I'm not saying I don't care about 2500 euro, but I'm sure even in the best case scenario a large portion of the 2500 euro or all of it of it would be lost to expense. At this point it is both for principle and for the fun of building that I am engaging in such action rather than simply for the desire of the return </p>
    <p>of my insurance claims.</p>

</div>









export default Blog;

// Repeat similar components for Books, Blog, Podcasts, Talks, Misc, and Contact.