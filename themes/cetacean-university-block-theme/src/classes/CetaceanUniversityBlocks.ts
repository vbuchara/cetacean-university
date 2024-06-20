export class CetaceanUniversityBlocks{
    public static readonly DomainName = "cetacean-university-theme" as const;
    public static readonly Banner = `${this.DomainName}/banner` as const;
    public static readonly Heading = `${this.DomainName}/heading` as const;
    public static readonly Button = `${this.DomainName}/button` as const;
    public static readonly EventsAndPosts = `${this.DomainName}/events-and-posts` as const;

    public static readonly BlockCategory = "cetacean-university" as const;
};