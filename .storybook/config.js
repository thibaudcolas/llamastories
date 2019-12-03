import { configure } from '@storybook/react';

// Load all files ending in .stories.js.
const req = require.context('../src', true, /\.stories\.js$/);

configure(() => {
    /* eslint-disable global-require */
    const hasIcons = document.querySelector('[data-storybook-svg-icons]');

    if (!hasIcons) {
        const icons = document.createElement('div');
        icons.setAttribute('data-storybook-svg-icons', true);
        icons.innerHTML = STORYBOOK_SVG_ICONS;
        document.body.appendChild(icons);
    }

    window.CANCELLATION_HOURS = 48;

    window.VIDEO_SETTINGS = {
        video_call_period_start_padding: 0,
        video_call_period_end_delay: 0,
    };

    window.SYSTEM_SETTINGS = {
        title_404: 'Page not found',
        body_404: '<p>Page not found</p>',
        service_landing_url: 'https://www.example.com/#service_landing_url',
        service_donation_url: 'https://www.example.com/#service_donation_url',
        service_faq_url: 'https://www.example.com/#service_faq_url',
        service_terms_url: 'https://www.example.com/#service_terms_url',
        service_crisis_url: 'https://www.example.com/#service_crisis_url',
        service_troubleshooting_url:
            'https://www.example.com/#service_troubleshooting_url',
        service_contact_email: 'test@example.com',
        counsellor_resources_url:
            'https://www.example.com/#counsellor_resources_url',
    };

    window.URL_PATTERNS = {
        login: '/login',
        logout: '/logout',
        dashboard_index: '/dashboard_index',
        dashboard_user_form: '/dashboard_user_form',
        counsellor_dashboard_index: '/counsellor_dashboard_index',
        counsellor_dashboard_caseload: '/counsellor_dashboard_caseload',
    };

    global.__webpack_hash__ = '13b43433ad2a439d00b2';

    req.keys().forEach((filename) => req(filename));
}, module);
