<?php

if (!isset($attributes) || !is_array($attributes)) {
    $attributes = [];
}

$title          = isset($attributes['title']) ? esc_html($attributes['title']) : '';
$base_url_label = isset($attributes['baseUrlLabel']) ? esc_html($attributes['baseUrlLabel']) : '';
$base_url       = isset($attributes['baseUrl']) ? esc_html($attributes['baseUrl']) : '';
$subtitle       = isset($attributes['subtitle']) ? esc_html($attributes['subtitle']) : '';

$data_label = isset($attributes['dataApiKeyLabel']) ? esc_html($attributes['dataApiKeyLabel']) : '';
$data_key   = isset($attributes['dataApiKey']) ? esc_html($attributes['dataApiKey']) : '';
$data_note  = isset($attributes['dataApiKeyNote']) ? esc_html($attributes['dataApiKeyNote']) : '';

$proj_label = isset($attributes['projectApiKeyLabel']) ? esc_html($attributes['projectApiKeyLabel']) : '';
$proj_key   = isset($attributes['projectApiKey']) ? esc_html($attributes['projectApiKey']) : '';
$proj_note  = isset($attributes['projectApiKeyNote']) ? esc_html($attributes['projectApiKeyNote']) : '';

$links_intro = isset($attributes['linksIntro']) ? esc_html($attributes['linksIntro']) : '';

$btn_label = isset($attributes['BtnLabel']) ? esc_html($attributes['BtnLabel']) : '';
$btn_url   = isset($attributes['BtnUrl']) ? esc_url($attributes['BtnUrl']) : '#';

$help_text  = isset($attributes['helpText']) ? esc_html($attributes['helpText']) : '';
$help_email = isset($attributes['helpEmail']) ? sanitize_email($attributes['helpEmail']) : '';

$icon_arrow = file_get_contents(get_template_directory() . '/gutenberg-blocks/assets/icons/arrow.svg');

$button_html = '';
if (function_exists('print_component')) {
    ob_start();
    print_component('button', [
        'type'              => 'custom',
        'is_left_alignment' => true,
        'icon_right'        => $icon_arrow,
        'classes'           => 'se-btn_main se-btn_constant se-btn__icon-right',
        'link'              => [
            'url'    => $btn_url,
            'title'  => $btn_label,
            'target' => '',
        ],
    ]);
    $button_html = ob_get_clean();
}
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'se-api-card']); ?>>
    <div class="se-api-card__header">
        <h2 class="se-api-card__title"><?php echo $title; ?></h2>
        <span class="se-api-card__badge">
            <strong><?php echo $base_url_label; ?></strong>
            <code><?php echo $base_url; ?></code>
        </span>
    </div>

    <?php if ($subtitle) : ?>
        <p class="se-api-card__subtitle"><?php echo $subtitle; ?></p>
    <?php endif; ?>

    <div class="se-api-card__rows">
        <div class="se-api-card__row">
            <div class="se-api-card__row-label"><?php echo $data_label; ?></div>
            <div class="se-api-card__row-value">
                <code><?php echo $data_key; ?></code>
            </div>
            <span class="se-api-card__note"><?php echo $data_note; ?></span>
        </div>
        <div class="se-api-card__row">
            <div class="se-api-card__row-label"><?php echo $proj_label; ?></div>
            <div class="se-api-card__row-value">
                <code><?php echo $proj_key; ?></code>
            </div>
            <span class="se-api-card__note"><?php echo $proj_note; ?></span>
        </div>
    </div>

    <?php if ($links_intro) : ?>
        <div class="se-api-card__links-intro"><?php echo $links_intro; ?></div>
    <?php endif; ?>

    <div class="se-api-card__cta-wrap">
        <?= $button_html ?>

        <p class="se-api-card__help">
            <?php if ($help_text !== '' && $help_email !== '') {
                $parts = explode('{email}', $help_text, 2);

                echo esc_html($parts[0]);
                echo '<a href="mailto:' . esc_attr($help_email) . '">' . esc_html($help_email) . '</a>';
                if (isset($parts[1])) {
                    echo esc_html($parts[1]);
                }
            } elseif ($help_text !== '') {
                echo esc_html($help_text);
            } ?>
        </p>
    </div>
</div>