export const fetchComments = async () => {
    try {
        const response = await fetch('https://www.daikoomyo.fr/api/comments');
        
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};

export const fetchCommentsBySoin = async (soinInt: number) => {
    try {
        const response = await fetch(`https://www.daikoomyo.fr/api/comments?soin=${soinInt}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};