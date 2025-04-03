import { getTweets } from '../db/tweet';  

class TweetController {
    async getAllTweets(): Promise<number[]> {
        const tweets = await getTweets();
        const evenTweets = tweets.filter(tweet => tweet % 2 === 0);
        return evenTweets;
    }
}

export default TweetController;