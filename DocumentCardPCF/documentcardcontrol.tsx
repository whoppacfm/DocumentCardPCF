//----------------------------
//Imports
//----------------------------

//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//Document Card
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
  } from '@fluentui/react/lib/DocumentCard';

  import { ImageFit } from '@fluentui/react/lib/Image';
import { TestImages } from '@fluentui/example-data';

//FocusZone
import { createArray } from '@fluentui/react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from '@fluentui/react-focus';
import { DefaultButton } from '@fluentui/react/lib/Button';

//Stack
import { Stack } from '@fluentui/react/lib/Stack';

//Custom css
import './documentcardcontrol.css';

//----------------------------
//Testing/System/DataSource
//----------------------------
var DATA_SOURCE = "CRM"
let href = window!.top!.location.href;
if(href.indexOf("127.") > -1 || href.indexOf("localhost") > -1) {
    DATA_SOURCE="TEST";
}
var CRM_TEST_MODE = 0;

//-------------
//Document Card
//-------------
const DocumentCardControl : React.FunctionComponent = (props:any) => {
    
      const previewProps: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
          {
            name: '2016 Conference Presentation',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'Spec Sheet for design',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'Contoso Marketing Presentation',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'Notes from Ignite conference',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'FY17 Cost Projections',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
        ],
      };

      const previewPropsTest: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
          {
            name: 'IDocumentCardPreviewProps',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'IDocumentCardPreviewProps 2',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: "./wordIcon.png",//"https://png.pngtree.com/element_our/md/20180627/md_5b33460fe6357.jpg",
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },          
        ],
      };          

      const onActionClick = (action: string, ev: React.SyntheticEvent<HTMLElement>): void => {
        console.log(`You clicked the ${action} action`);
        ev.stopPropagation();
        ev.preventDefault();
        alert(`You clicked the ${action} action`);
      };
      
      const documentCardActions = [
        {
          iconProps: { iconName: 'Share' },
          onClick: onActionClick.bind(this, 'share'),
          ariaLabel: 'share action',
        },
        {
          iconProps: { iconName: 'Pin' },
          onClick: onActionClick.bind(this, 'pin'),
          ariaLabel: 'pin action',
        },
        {
          iconProps: { iconName: 'Ringer' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
      ];

      const documentCardActionsTest = [
        {
          iconProps: { iconName: 'AccessLogo' },
          onClick: onActionClick.bind(this, 'share'),
          ariaLabel: 'share action',
        },
        {
          iconProps: { iconName: 'AccountActivity' },
          onClick: onActionClick.bind(this, 'pin'),
          ariaLabel: 'pin action',
        },
        {
          iconProps: { iconName: 'AADLogo' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
        {
          iconProps: { iconName: 'AutoRacing' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
        {
          iconProps: { iconName: 'ArrangeSendToBack' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },                
      ];      

      const tokens = { childrenGap: 5 };

    return (
        <>
          {/*<FocusZone direction={FocusZoneDirection.domOrder} role="menubar">*/}
          <Stack tokens={tokens} horizontal verticalAlign="center" style={{overflow:"auto", scrollbarWidth:"thin", width:"1200px", border:"1px solid black"}}>
            <DocumentCard key="card1" role="menuitem"
                aria-label="Document Card with multiple items, commands and views. Marketing documents. 6 files were uploaded.
                                Created by Annie Lindqvist in February 23, 2016. 432 views."
            >
                <DocumentCardPreview {...previewProps} />
                <DocumentCardLocation
                    location="Marketing Documents"
                    locationHref="http://microsoft.com"
                    ariaLabel="Location, Marketing Documents"
                />
                <DocumentCardTitle title="6 files were uploaded" />
                <DocumentCardActivity
                    activity="Created Feb 23, 2016"
                    people={[{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }]}
                />
                <DocumentCardActions actions={documentCardActions} views={432} />
            </DocumentCard>
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>                                                
          </Stack>

        <br/>
        <br/>
        <br/>
        <br/>
        <Stack tokens={tokens} horizontal style={{overflow:"auto", scrollbarWidth:"thin", height:"1000px",width:"1200px", border:"1px solid grey", padding:"10px"}}>
          
        <Stack tokens={tokens} verticalFill horizontalAlign="center" style={{overflow:"hidden", scrollbarWidth:"thin", height:"700px",width:"400px", border:"1px solid black", float:"left"}}>
          <strong>Stack 1</strong>
          <Stack tokens={tokens} verticalFill horizontalAlign="center" style={{overflowX:"hidden", overflowY:"auto", scrollbarWidth:"thin", height:"700px",width:"400px", border:"1px solid black", float:"left"}}>
              <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard> 
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard> 
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard>             
          </Stack>
          </Stack>
          
          <Stack tokens={tokens} verticalFill horizontalAlign="center" style={{overflow:"hidden", scrollbarWidth:"thin", height:"700px",width:"400px", border:"1px solid black", float:"left"}}>
            <strong>Stack 2</strong>
            <Stack tokens={tokens} verticalFill horizontalAlign="center" style={{overflowX:"hidden", overflowY:"auto", scrollbarWidth:"thin", height:"700px",width:"400px", border:"1px solid black", float:"left"}}>

              <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard> 
            <DocumentCard aria-label="aria-label" key="card2" role="menuitem">
                <DocumentCardPreview {...previewPropsTest} />
                <DocumentCardLocation
                    location="DocumentCardLocation"
                    locationHref="http://microsoft.com"
                    ariaLabel="DocumentCardLocation Label"
                />
                <DocumentCardTitle title="DocumentCardTitle" />
                <DocumentCardActivity
                    activity="DocumentCardActivity"
                    people={[{ name: 'DocumentCardActivity People', profileImageSrc: TestImages.personaMale }]}
                />
                <DocumentCardActions actions={documentCardActionsTest} views={233} />
            </DocumentCard> 
          </Stack>
        </Stack>
        </Stack>

        </>
    );
}

export function Render(context:any, container:any, theobj:object) {
  
    /* ReactDOM.render is deprecated, but FluentUI does not support new React version until now
    const root = createRoot(container);
    root.render(<div><SearchSelectControl context={context} theobj={theobj} /></div>);
    */
   
    ReactDOM.render(
      <>
        <div><DocumentCardControl context={context} theobj={theobj} /></div>
      </>
      , container
    );
  
  }
