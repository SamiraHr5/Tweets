import { getTweets } from '../db/tweet';  

class TweetController {
    async getAllTweets(): Promise<number[]> {
        const tweets = await getTweets();
        return tweets;
    }
}

export default TweetController;