// @flow

import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { PureModal as Modal } from '../index';
import { SIZES, CLOSE_BUTTON_DATA_TEST } from '../consts';
import ModalHeader from '../ModalHeader';
import ModalSection from '../ModalSection';
import ModalFooter from '../ModalFooter';
import Illustration from '../../Illustration';
import List from '../../List';
import ListItem from '../../List/ListItem';
import Wallet from '../../icons/Wallet';
import Button from '../../Button';
import ChevronLeft from '../../icons/ChevronLeft';

// for testing purposes only
const Div = (props: any) => <div>{props.children}</div>;

describe('Large Modal', () => {
  const size = SIZES.LARGE;
  const title = 'My title';
  const illustration = <Illustration name="Accommodation" size="small" />;
  const description = 'My description';
  const suppressed = true;
  const content = 'My content';
  const onClose = jest.fn();
  const dataTest = 'test';

  const sectionSuppressed = true;
  const fixedFooter = true;
  const flex = ['0 0 auto', '1 1 100%'];

  const component = shallow(
    <Modal size={size} onClose={onClose} fixedFooter={fixedFooter} dataTest={dataTest}>
      <ModalHeader
        title={title}
        illustration={illustration}
        description={description}
        suppressed={suppressed}
        dataTest={dataTest}
      >
        <List>
          <ListItem icon={<Wallet />}>
            To save you time, we have calculated your total possible refundable amount.
          </ListItem>
        </List>
      </ModalHeader>
      <ModalSection suppressed={sectionSuppressed} dataTest={dataTest}>
        {content}
      </ModalSection>
      <ModalFooter flex={flex} dataTest={dataTest}>
        <Button icon={<ChevronLeft />} type="secondary">
          Back
        </Button>
        <Button block>Continue to Payment</Button>
      </ModalFooter>
    </Modal>,
  );
  const modalWrapper = component.find('Modal__ModalWrapper');
  const modalHeader = component.find('ModalHeader');
  const modalSection = component.find('ModalSection');
  const modalFooter = component.find('ModalFooter');
  const closeButton = component.find('Modal__CloseContainer').find('ModalCloseButton');

  it('should have passed props', () => {
    expect(component.render().prop('data-test')).toBe(dataTest);
    expect(modalWrapper.prop('size')).toBe(size);
    expect(modalHeader.prop('title')).toBe(title);
    expect(modalHeader.prop('illustration')).toBe(illustration);
    expect(modalHeader.prop('description')).toBe(description);
    expect(modalHeader.prop('suppressed')).toBe(suppressed);
    expect(modalSection.prop('suppressed')).toBe(sectionSuppressed);
    expect(modalSection.prop('children')).toBe(content);
    expect(modalWrapper.prop('fixedFooter')).toBe(fixedFooter);
    expect(modalFooter.prop('flex')).toBe(flex);
    expect(modalFooter.render().prop('data-test')).toBe(dataTest);
    expect(modalHeader.render().prop('data-test')).toBe(dataTest);
    expect(modalSection.render().prop('data-test')).toBe(dataTest);
  });

  it('close button should have dataTest', () => {
    expect(closeButton.prop('dataTest')).toBe(CLOSE_BUTTON_DATA_TEST);
    closeButton.simulate('click');
    expect(onClose).toHaveBeenCalledWith();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Modal with ModalSection', () => {
  const title = 'My title';
  const content = 'My content';

  const component = mount(
    <Modal>
      <ModalHeader title={title} />
      <Div>
        <Div>
          <Div>
            <ModalSection>{content}</ModalSection>
          </Div>
        </Div>
      </Div>
      <ModalFooter>It should render if needed</ModalFooter>
    </Modal>,
  );
  it('should match snapshot', () => {
    const instance = component.instance();
    expect(instance.state.hasModalSection).toBe(true);
  });
});

describe('Modal without ModalSection', () => {
  const title = 'My title';

  const component = mount(
    <Modal>
      <ModalHeader title={title} />
      <ModalFooter>
        <Button block>Continue to Payment</Button>
      </ModalFooter>
    </Modal>,
  );
  it('should match snapshot', () => {
    const instance = component.instance();
    expect(instance.state.hasModalSection).toBe(false);
  });
});
