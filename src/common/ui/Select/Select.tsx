import { ArrowUp } from '@app/assets/svg';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import type { SelectProps } from './Select.interface';
import styles from './Select.module.css';

export const Select = ({
    options,
    optionsVisible = options,
    value,
    onChange,
    placeholder = 'Выберите значение',
    disabled = false,
    className,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    const handleSelect = (optionValue: string) => {
        setSelectedValue(optionValue);
        setIsOpen(false);
        onChange?.(optionValue);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (disabled) return;

        switch (event.key) {
            case 'Enter':
            case 'Space':
                event.preventDefault();
                setIsOpen(!isOpen);
                break;
            case 'Escape':
                setIsOpen(false);
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
        }
    };

    return (
        <div
            ref={selectRef}
            className={clsx(styles.select, className, disabled && styles.disabled, isOpen && styles.open)}
        >
            <button
                type="button"
                className={styles.select__trigger}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className={styles.select__value}>{selectedOption ? selectedOption.label : placeholder}</span>
                <span className={styles.select__arrow}>
                    <ArrowUp className={styles.select__arrow} />
                </span>
            </button>

            {isOpen && (
                <ul className={styles.select__dropdown} role="listbox">
                    {optionsVisible
                        ?.filter((option) => option.value !== selectedValue)
                        .map((option) => (
                            <li
                                key={option.value}
                                className={clsx(
                                    styles.select__option,
                                    option.value === selectedValue && styles.selected
                                )}
                                onClick={() => handleSelect(option.value)}
                                role="option"
                                aria-selected={option.value === selectedValue}
                            >
                                {option.label}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
