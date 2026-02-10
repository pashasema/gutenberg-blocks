import {Fragment} from '@wordpress/element';
import {InspectorControls, RichText, URLInputButton, useBlockProps} from '@wordpress/block-editor';
import {PanelBody, TextareaControl, TextControl} from '@wordpress/components';

export default function EditComponent({attributes, setAttributes}) {
    const blockProps = useBlockProps({className: 'se-api-card'});
    
    const handleAttributeChange = (key) => (value) =>
        setAttributes({[key]: value});
    
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="Main" initialOpen>
                    <TextControl
                        label="Base URL label"
                        value={attributes.baseUrlLabel}
                        onChange={handleAttributeChange('baseUrlLabel')}
                    />
                    <TextControl
                        label="Base URL"
                        value={attributes.baseUrl}
                        onChange={handleAttributeChange('baseUrl')}
                    />
                    <TextareaControl
                        label="Subtitle"
                        value={attributes.subtitle}
                        onChange={handleAttributeChange('subtitle')}
                    />
                </PanelBody>
                
                <PanelBody title="Keys">
                    <TextControl
                        label="Data API key label"
                        value={attributes.dataApiKeyLabel}
                        onChange={handleAttributeChange('dataApiKeyLabel')}
                    />
                    <TextControl
                        label="Data API key example"
                        value={attributes.dataApiKey}
                        onChange={handleAttributeChange('dataApiKey')}
                    />
                    <TextControl
                        label="Data API key note"
                        value={attributes.dataApiKeyNote}
                        onChange={handleAttributeChange('dataApiKeyNote')}
                    />
                    <TextControl
                        label="Project API key label"
                        value={attributes.projectApiKeyLabel}
                        onChange={handleAttributeChange('projectApiKeyLabel')}
                    />
                    <TextControl
                        label="Project API key example"
                        value={attributes.projectApiKey}
                        onChange={handleAttributeChange('projectApiKey')}
                    />
                    <TextControl
                        label="Project API key note"
                        value={attributes.projectApiKeyNote}
                        onChange={handleAttributeChange('projectApiKeyNote')}
                    />
                </PanelBody>
                
                <PanelBody title="Links">
                    <TextControl
                        label="Button label"
                        value={attributes.BtnLabel}
                        onChange={handleAttributeChange('BtnLabel')}
                    />
                    <URLInputButton
                        url={attributes.BtnUrl}
                        onChange={(newUrl) => setAttributes({BtnUrl: newUrl})}
                    />
                </PanelBody>
                
                <PanelBody title="Help">
                    <TextControl
                        label="Help text"
                        value={attributes.helpText}
                        onChange={handleAttributeChange('helpText')}
                    />
                    <TextControl
                        label="Help email"
                        value={attributes.helpEmail}
                        onChange={handleAttributeChange('helpEmail')}
                    />
                </PanelBody>
            </InspectorControls>
            
            <div {...blockProps}>
                <div className="se-api-card__header">
                    <RichText
                        tagName="h2"
                        className="se-api-card__title"
                        value={attributes.title}
                        onChange={handleAttributeChange('title')}
                        placeholder="You are reading the Data API docs"
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                    <span className="se-api-card__badge">
            <strong>{attributes.baseUrlLabel || ''}</strong>
            <code>{attributes.baseUrl || ''}</code>
          </span>
                </div>
                
                <RichText
                    tagName="p"
                    className="se-api-card__subtitle"
                    value={attributes.subtitle}
                    onChange={handleAttributeChange('subtitle')}
                />
                
                <div className="se-api-card__rows">
                    <div className="se-api-card__row">
                        <div className="se-api-card__row-label">
                            {attributes.dataApiKeyLabel || ''}
                        </div>
                        <div className="se-api-card__row-value">
                            <code>{attributes.dataApiKey || ''}</code>{' '}
                        
                        </div>
                        <span className="se-api-card__note">
                            {attributes.dataApiKeyNote || ''}
                        </span>
                    </div>
                    <div className="se-api-card__row">
                        <div className="se-api-card__row-label">
                            {attributes.projectApiKeyLabel || ''}
                        </div>
                        
                        <div className="se-api-card__row-value">
                            <code>{attributes.projectApiKey || ''}</code>{' '}
                        </div>
                        
                        <span className="se-api-card__note">
                            {attributes.projectApiKeyNote || ''}
                        </span>
                    </div>
                </div>
                
                <div className="se-api-card__cta-wrap">
                    <a
                        className="se-btn se-btn--primary"
                        href={attributes.BtnUrl || '#'}
                    >
                        {attributes.BtnLabel || ''}
                    </a>
                    
                    <p className="se-api-card__help">
                        {attributes.helpText || ' '}{' '}
                        <a href={`mailto:${attributes.helpEmail || ''}`}>
                            {attributes.helpEmail || ''}
                        </a>
                        .
                    </p>
                </div>
            </div>
        </Fragment>
    );
}