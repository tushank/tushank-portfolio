# Google Analytics Setup Guide

This portfolio includes comprehensive Google Analytics 4 (GA4) tracking to monitor user engagement and behavior.

## 🚀 Quick Setup

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Create Account"
3. Set up your property:
   - Account name: `Your Name Portfolio`
   - Property name: `Portfolio Website`
   - Reporting time zone: Your timezone
   - Currency: Your preferred currency

### 2. Get Your Measurement ID

1. In your GA4 property, go to **Admin** (gear icon)
2. Under **Property**, click **Data Streams**
3. Click **Add stream** → **Web**
4. Enter your website URL: `https://yourdomain.com`
5. Give it a name: `Portfolio Website`
6. Copy the **Measurement ID** (starts with `G-`)

### 3. Add Environment Variable

Create a `.env.local` file in your project root:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### 4. Deploy and Test

1. Deploy your portfolio to production
2. Visit your website
3. Check Google Analytics Real-time reports to verify tracking

## 📊 What's Being Tracked

### Automatic Tracking
- **Page Views**: Every page visit and navigation
- **Scroll Depth**: 25%, 50%, 75%, 100% scroll milestones
- **Time on Page**: How long users spend on your site
- **Session Duration**: Total time per visit

### Custom Events
- **Button Clicks**:
  - `download_cv_click` - CV download button
  - `about_me_click` - About Me button
  - `project_view` - Project view links

- **Social Interactions**:
  - `github_click` - GitHub profile clicks
  - `linkedin_click` - LinkedIn profile clicks
  - `whatsapp_click` - WhatsApp contact clicks

- **Contact Actions**:
  - `email_click` - Email address clicks
  - `phone_click` - Phone number clicks

### Event Categories
- `engagement` - User engagement actions
- `navigation` - Navigation actions
- `social` - Social media interactions
- `contact` - Contact method interactions

## 🔧 Advanced Configuration

### Custom Dimensions (Optional)

You can add custom dimensions in GA4 to track additional data:

1. Go to **Admin** → **Custom Definitions** → **Custom Dimensions**
2. Create dimensions for:
   - User Type (New vs Returning)
   - Device Category
   - Traffic Source

### Enhanced Ecommerce (Optional)

If you want to track portfolio interactions as "conversions":

1. Go to **Admin** → **Events**
2. Mark key events as conversions:
   - `download_cv_click`
   - `email_click`
   - `phone_click`

## 🛠️ Development vs Production

### Development Mode
- Analytics is disabled when `NEXT_PUBLIC_GA_ID` is not set
- Console message shows setup reminder
- No tracking data is sent

### Production Mode
- Full analytics tracking enabled
- All events and page views tracked
- Real-time data available in GA4 dashboard

## 📈 Key Metrics to Monitor

### User Engagement
- **Bounce Rate**: Users who leave after one page
- **Session Duration**: Average time spent on site
- **Pages per Session**: How many pages users view

### Content Performance
- **Most Viewed Sections**: Which parts of your portfolio get attention
- **Project Interactions**: Which projects are most clicked
- **Contact Method Preferences**: Email vs phone vs social

### Traffic Sources
- **Direct Traffic**: Users typing your URL directly
- **Social Media**: Traffic from LinkedIn, GitHub, etc.
- **Search Engines**: Organic search traffic

## 🔍 Debugging

### Check if Analytics is Working

1. Open browser Developer Tools (F12)
2. Go to **Console** tab
3. Look for Google Analytics messages
4. Check **Network** tab for `gtag` requests

### Common Issues

**Analytics not tracking:**
- Verify `NEXT_PUBLIC_GA_ID` is set correctly
- Check that the ID starts with `G-`
- Ensure you're testing on the production domain

**Events not showing:**
- Wait 24-48 hours for data to appear in GA4
- Check Real-time reports for immediate verification
- Verify events are firing in browser console

## 📱 Mobile Tracking

The analytics setup automatically tracks:
- Mobile vs Desktop usage
- Touch interactions
- Mobile-specific user behavior
- Responsive design performance

## 🔒 Privacy Considerations

This implementation:
- ✅ Respects user privacy
- ✅ Only tracks anonymous usage data
- ✅ Complies with GDPR (no personal data collected)
- ✅ Uses Google's standard GA4 implementation

## 🚀 Next Steps

1. Set up your GA4 property
2. Add your Measurement ID to `.env.local`
3. Deploy to production
4. Monitor your analytics dashboard
5. Use insights to improve your portfolio

## 📞 Support

If you need help with Google Analytics setup:
- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics Guide](https://nextjs.org/docs/advanced-features/measuring-performance)
