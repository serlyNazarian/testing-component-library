import { useState } from "react";
import {
  CheckBoxFormItem,
  CopyableTextBg,
  Div,
  FormApp,
  MyAlert,
  MyButtonCopy,
  MyCard,
  MyCardTransparent,
  MyCheckBox,
  MyColorPicker,
  MyDataEmpty,
  MyDefaultPageHeader,
  MyDivider,
  MyFlex,
  MyFlexVertical,
  MyLink,
  MyLinkA,
  MySegmented,
  MySegmentedFormItem,
  MySelect,
  MySelectFormItem,
  MyStatistic,
  MyStatisticBold,
  MyStatisticPrimary,
  MySwitch,
  MySwitchFormItem,
  MySwitchFormItemNumVal,
  MyTabsCard,
  MyTag,
  MyText,
  MyTextBold,
  MyTextTitle,
  MyTooltip,
} from "my-ui-lib-ubicross";
import "./App.css";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 40 }}>
    <MyTextTitle fontSize={20} style={{ marginBottom: 12 }}>
      {title}
    </MyTextTitle>
    <MyDivider style={{ margin: "8px 0 16px" }} />
    <MyFlex wrap="wrap" gap={16} align="flex-start">
      {children}
    </MyFlex>
  </div>
);

function App() {
  const [segValue, setSegValue] = useState("Option A");

  return (
    <div style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
      <MyTextTitle fontSize={30}>
        my-ui-lib-ubicross Component Showcase
      </MyTextTitle>
      <MyDivider />

      <Section title="MyAlert">
        <MyAlert message="Success alert" type="success" showIcon />
        <MyAlert message="Info alert" type="info" showIcon />
        <MyAlert message="Warning alert" type="warning" showIcon />
        <MyAlert message="Error alert" type="error" showIcon />
      </Section>

      <Section title="Text Components">
        <MyText>MyText normal text</MyText>
        <MyTextBold>MyTextBold bold text</MyTextBold>
        <MyTextTitle>MyTextTitle title text</MyTextTitle>
        <MyTextTitle fontSize={24}>MyTextTitle fontSize=24</MyTextTitle>
        <CopyableTextBg label="CopyableTextBg click to copy" />
      </Section>

      <Section title="Buttons">
        <MyButtonCopy label="MyButtonCopy click to copy this text" />
      </Section>

      <Section title="Cards">
        <MyCard title="MyCard" style={{ width: 220 }}>
          <MyText>Card with title and body content</MyText>
        </MyCard>
        <MyCardTransparent style={{ width: 220, border: "1px dashed #ccc" }}>
          <MyText>MyCardTransparent transparent background</MyText>
        </MyCardTransparent>
      </Section>

      <Section title="Layout Components">
        <Div style={{ background: "#e6f4ff", padding: 12, borderRadius: 6 }}>
          <MyText>Div enhanced div</MyText>
        </Div>
        <div style={{ background: "#f0f2f5", padding: 12, borderRadius: 6 }}>
          <MyText style={{ marginBottom: 8 }}>MyFlex (horizontal)</MyText>
          <MyFlex gap={8}>
            <MyTag label="Item A" />
            <MyTag label="Item B" />
            <MyTag label="Item C" />
          </MyFlex>
        </div>
        <div style={{ background: "#f0f2f5", padding: 12, borderRadius: 6 }}>
          <MyText style={{ marginBottom: 8 }}>MyFlexVertical (vertical)</MyText>
          <MyFlexVertical gap={8}>
            <MyTag label="Item A" />
            <MyTag label="Item B" />
            <MyTag label="Item C" />
          </MyFlexVertical>
        </div>
        <MyCard style={{ width: 400 }}>
          <MyDefaultPageHeader
            left={<MyTextBold>MyDefaultPageHeader</MyTextBold>}
            right={<MyTag label="Right side" />}
          />
        </MyCard>
        <div style={{ width: "100%" }}>
          <MyText>MyDivider</MyText>
          <MyDivider />
        </div>
      </Section>

      <Section title="MyTag">
        <MyTag label="Default" />
        <MyTag label="Success" color="success" />
        <MyTag label="Warning" color="warning" />
        <MyTag label="Error" color="error" />
        <MyTag label="Processing" color="processing" />
      </Section>

      <Section title="Links">
        <MyLink path="/" label="MyLink Router link to /" />
        <MyLinkA label="MyLinkA plain" href="https://example.com" blank />
        <MyLinkA
          label="MyLinkA underline"
          href="https://example.com"
          underline
          blank
        />
        <MyLinkA label="MyLinkA bold" href="https://example.com" bold blank />
      </Section>

      <Section title="Statistics">
        <MyCard style={{ minWidth: 140 }}>
          <MyStatistic title="MyStatistic" value={1234} />
        </MyCard>
        <MyCard style={{ minWidth: 140 }}>
          <MyStatisticBold title="MyStatisticBold" value={5678} suffix=" $" />
        </MyCard>
        <MyCard style={{ minWidth: 140 }}>
          <MyStatisticPrimary title="MyStatisticPrimary" value={910} />
        </MyCard>
      </Section>

      <Section title="MyTooltip">
        <MyTooltip title="Tooltip message here" withLinkCursor>
          <MyTag label="Hover me MyTooltip" />
        </MyTooltip>
      </Section>

      <Section title="MySegmented">
        <MySegmented
          options={["Option A", "Option B", "Option C"]}
          value={segValue}
          onChange={setSegValue}
        />
      </Section>

      <Section title="MyTabsCard">
        <div style={{ width: 500 }}>
          <MyTabsCard
            items={[
              {
                key: "1",
                label: "Tab One",
                children: <MyText>Content for Tab One</MyText>,
              },
              {
                key: "2",
                label: "Tab Two",
                children: <MyText>Content for Tab Two</MyText>,
              },
              {
                key: "3",
                label: "Tab Three",
                children: <MyText>Content for Tab Three</MyText>,
              },
            ]}
          />
        </div>
      </Section>

      <Section title="MySwitch">
        <MySwitch label="MySwitch off by default" />
        <MySwitch label="MySwitch on by default" defaultChecked />
      </Section>

      <Section title="MySelect">
        <MySelect
          placeholder="MySelect choose a fruit"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry" },
          ]}
          style={{ width: 240 }}
        />
      </Section>

      <Section title="MyCheckBox">
        <MyCheckBox>MyCheckBox unchecked</MyCheckBox>
        <MyCheckBox defaultChecked>MyCheckBox checked</MyCheckBox>
      </Section>

      <Section title="MyDataEmpty">
        <MyCard style={{ width: 400 }}>
          <MyDataEmpty description="MyDataEmpty no data to display" />
        </MyCard>
      </Section>

      <Section title="Form Components (inside FormApp)">
        <MyCard title="Form Demo" style={{ width: 420 }}>
          <FormApp layout="vertical">
            <CheckBoxFormItem name="check" label="CheckBoxFormItem" />
            <MySelectFormItem
              name="fruit"
              label="MySelectFormItem"
              placeholder="Select a fruit"
              options={[
                { label: "Apple", value: "apple" },
                { label: "Banana", value: "banana" },
              ]}
            />
            <MySegmentedFormItem
              name="seg"
              label="MySegmentedFormItem"
              options={["A", "B", "C"]}
            />
            <MySwitchFormItem name="sw" label="MySwitchFormItem" />
            <MySwitchFormItemNumVal
              name="swNum"
              label="MySwitchFormItemNumVal"
            />
            <MyColorPicker name="color" label="MyColorPicker" color="#1677ff" />
          </FormApp>
        </MyCard>
      </Section>
    </div>
  );
}

export default App;
