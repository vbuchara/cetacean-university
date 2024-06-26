export class CetaceanUniversityBlocks{
    public static readonly DomainName = "cetacean-university-theme" as const;
    public static readonly Banner = `${this.DomainName}/banner` as const;
    public static readonly Heading = `${this.DomainName}/heading` as const;
    public static readonly Button = `${this.DomainName}/button` as const;
    public static readonly EventsAndPosts = `${this.DomainName}/events-and-posts` as const;
    public static readonly Header = `${this.DomainName}/header` as const;
    public static readonly Footer = `${this.DomainName}/footer` as const;
    public static readonly Menu = `${this.DomainName}/menu` as const;
    public static readonly Slider = `${this.DomainName}/slider` as const;
    public static readonly Slide = `${this.DomainName}/slide` as const;

    public static readonly PageBannerTitle = `${this.DomainName}/page-banner-title` as const;
    public static readonly PageBannerSubtitle = `${this.DomainName}/page-banner-subtitle` as const;
    public static readonly PageBannerArchiveTitle = `${this.DomainName}/page-banner-archive-title` as const;
    public static readonly PageBannerGeneric = `${this.DomainName}/page-banner-generic` as const;

    public static readonly PostBanner = `${this.DomainName}/post-banner` as const;
    public static readonly PostContent = `${this.DomainName}/post-content` as const;
    public static readonly BlogPosts = `${this.DomainName}/blog-posts` as const;

    public static readonly CampusBanner = `${this.DomainName}/campus-banner` as const;
    public static readonly CampusContent = `${this.DomainName}/campus-content` as const;
    
    public static readonly PageBanner = `${this.DomainName}/page-banner` as const;
    public static readonly PageContent = `${this.DomainName}/page-content` as const;

    public static readonly UpcomingEvents = `${this.DomainName}/upcoming-events` as const;
    public static readonly AllPrograms = `${this.DomainName}/all-programs` as const;
    public static readonly CampusesMap = `${this.DomainName}/campuses-map` as const;

    public static readonly BlockCategory = "cetacean-university" as const;
};