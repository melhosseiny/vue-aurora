import { shallowMount } from '@vue/test-utils';
import { VCard } from '@/.';

describe('VCard', () => {
  it('renders a card with a title', () => {
    const wrapper = shallowMount(VCard, {
      propsData: {
        title: 'Title'
      }
    });

    expect(wrapper.find('h1').text()).toBe('Title');
  })

  it('renders a card with a title and optional subtitle', () => {
    const wrapper = shallowMount(VCard, {
      propsData: {
        title: 'Title',
        subtitle: 'Subtitle'
      }
    });

    expect(wrapper.find('h2').text()).toBe('Subtitle');
  })

  it('renders a card with a title and optional meta data', () => {
    const wrapper = shallowMount(VCard, {
      propsData: {
        title: 'Title',
        meta: 'Meta'
      }
    });

    expect(wrapper.html()).toContain('Meta');
  })
})
